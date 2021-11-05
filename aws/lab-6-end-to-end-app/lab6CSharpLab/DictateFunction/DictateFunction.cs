using System;
using System.IO;
using Newtonsoft.Json;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Polly;
using Amazon.Polly.Model;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace DictateFunction
{
    public class DictateFunction
    {
        /// <summary>
        /// PollyNotes-DictateFunction
        /// 
        /// This lambda function is integrated with the following API methods:
        /// /notes/{id}/POST
        /// 
        /// This function does the following:
        /// 
        /// 1. Takes a JSON payload from API gateway and converts it into a DictateRequest
        /// 2. Queries DynamoDB for the note from the request to fetch the note text
        /// 3. Calls the Polly synthensize_speech API to convert text to speech
        /// 4. Stores the resulting audio in an MP3 file
        /// 5. Uploads the MP3 file to S3
        /// 6. Creates a pre-signed URL for the MP3 file
        /// 7. Returns the pre-signed URL to API Gateway
        /// </summary>
        /// <param name="request">DictateRequest containing the voiceId and the note to create an mp3 file from</param>
        /// <param name="context">Lambda context</param>
        /// <returns>string of the URL for the pre-signed mp3 file from S3</returns>
        public string FunctionHandler(DictateRequest request, ILambdaContext context)
        {
            // The note object contains the voiceId, userId and noteId from the /notes/{id}/POST
            // {
            //   "voiceId": "...",
            //     "note": {
            //       "userId": "...",
            //       "noteId": "..."
            //     }
            // }

            Console.WriteLine("Initiating PollyNotes-DictateFunction...");
            Console.WriteLine("DictateRequest received: " + JsonConvert.SerializeObject(request));

            // Get the name of the bucketName from the environment variable MP3_BUCKET_NAME
            string bucketName = Environment.GetEnvironmentVariable("MP3_BUCKET_NAME");

            // Create the DynamoDB client and the Context for Object Persistence Model
            AmazonDynamoDBClient client = new AmazonDynamoDBClient();
            DynamoDBContext ddbcontext = new DynamoDBContext(client);

            // Use the LoadAsync method to fetch all of the attributes of the note from the request from DynamoDB and wait
            // This is really to get the note attribute from the userId and noteId of the request
            var ddbTask = ddbcontext.LoadAsync(request.note);
            ddbTask.Wait();

            // The result will be stored in note
            Note note;

            // If there are no Exceptions
            if (ddbTask.Exception == null)
            {
                Console.WriteLine("Successfully executed LoadAsync with userId: " + request.note.userId + " and noteId: " + request.note.noteId);

                // Set the note variable to the result of the LoadAsync from DynamoDB
                note = ddbTask.Result;
            }
            else
            {
                // There was an exception, log the entry data and the exception
                Console.WriteLine("Unable to LoadAsync note with userId: " + request.note.userId + " and noteId: " + request.note.noteId);
                Console.WriteLine(ddbTask.Exception);

                // Return an empty string
                return "";
            }

            // Invoke Polly API, which will transform text into audio using the note we fetched from DynamoDB and the voiceId from the request
            var polly = new AmazonPollyClient();
            SynthesizeSpeechRequest speechRequest = new SynthesizeSpeechRequest
            {
                OutputFormat = OutputFormat.Mp3,
                Text = note.note,
                VoiceId = VoiceId.FindValue(request.voiceId)
            };
            var pollyTask = polly.SynthesizeSpeechAsync(speechRequest);
            pollyTask.Wait();
            Console.WriteLine("Successfully synthesized the Note text");

            // Save the audio stream returned by Amazon Polly on Lambda's temp directory '/tmp'
            string path = Path.Combine(
                Path.GetTempPath(),
                bucketName,
                request.note.userId);
            string filename = Path.Combine(path, request.note.noteId + ".mp3");
            Directory.CreateDirectory(path);
            using (FileStream file = new FileStream(filename, FileMode.Create, System.IO.FileAccess.Write))
            {
                pollyTask.Result.AudioStream.CopyTo(file);
            }
            Console.WriteLine("Successfully saved the Polly AudioStream to " + filename);

            // Upload our local file to S3
            var s3 = new AmazonS3Client();
            var s3Task = s3.PutObjectAsync(new PutObjectRequest
            {
                BucketName = bucketName,
                Key = String.Format("{0}/{1}.mp3", request.note.userId, request.note.noteId),
                FilePath = filename
            });
            s3Task.Wait();
            Console.WriteLine("Successfully uploaded the MP3 file to S3");

            // Generate a pre-signed URL so that we can securely access our MP3
            string url = s3.GetPreSignedURL(new GetPreSignedUrlRequest
            {
                BucketName = bucketName,
                Key = String.Format("{0}/{1}.mp3", request.note.userId, request.note.noteId),
                Expires = DateTime.Now + TimeSpan.FromHours(1)
            });
            Console.WriteLine("Successfully generated a pre-signed URL for the MP3 file: " + url);

            // Return the presigned URL to API Gateway
            return url;
        }

        /// <summary>
        /// TESTING ONLY - Run the project as a console application to test the <see cref="FunctionHandler"/>
        /// You should see the url back
        /// </summary>
        public static void Main()
        {
            string dictateTest = @"
            {  
                ""voiceId"": ""Russell"",
                ""note"": {
                    ""userId"": ""testuser"",
                    ""noteId"": ""001""
                }
            }";
            string url = new DictateFunction().FunctionHandler(JsonConvert.DeserializeObject<DictateRequest>(dictateTest), null);
            Console.WriteLine(url);
        }
    }
}
