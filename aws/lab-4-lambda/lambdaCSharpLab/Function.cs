using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using Amazon.Lambda.S3Events;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Util;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Calculator
{
    public class Function
    {
        IAmazonS3 S3Client { get; set; }

        /// <summary>
        /// Default constructor. This constructor is used by Lambda to construct the instance. When invoked in a Lambda environment
        /// the AWS credentials will come from the IAM role associated with the function and the AWS region will be set to the
        /// region the Lambda function is executed in.
        /// </summary>
        public Function()
        {
            S3Client = new AmazonS3Client();
        }

        /// <summary>
        /// Constructs an instance with a preconfigured S3 client. This can be used for testing the outside of the Lambda environment.
        /// </summary>
        /// <param name="s3Client"></param>
        public Function(IAmazonS3 s3Client)
        {
            this.S3Client = s3Client;
        }

        /// <summary>
        /// This method is called for every Lambda invocation. This method takes in an S3 event object and can be used
        /// to respond to S3 notifications.
        /// </summary>
        /// <param name="evnt"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task<string> FunctionHandler(S3Event evnt, ILambdaContext context)
        {
            var s3Event = evnt.Records?[0].S3;
            string result = "No numbers found in file";

            // extract bucket and key from the event
            string bucket = s3Event.Bucket.Name;
            string key = s3Event.Object.Key;
            Console.WriteLine($"New event: bucket {bucket}, key {key}", bucket, key);

            try
            {
                // get the object contents
                using (GetObjectResponse response = await this.S3Client.GetObjectAsync(bucket, key))
                using (Stream responseStream = response.ResponseStream)
                using (StreamReader reader = new StreamReader(responseStream))
                {
                    string responseBody = reader.ReadToEnd();

                    // find matches of all positive or negative numbers
                    var numbers = Regex.Matches(responseBody, @"-?\d+")
                        .Select(v=>v.Value)
                        .Select(int.Parse)
                        .ToArray();

                    if (numbers.Length > 0)
                    {
                        // caclulate min/max/average
                        var min = numbers.Min();
                        var max = numbers.Max();
                        var avg = numbers.Average();

                        result = $"Min: {min} Max: {max} Average: {avg}";
                    }
                }
                Console.WriteLine(result);
                return result;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error getting object {s3Event.Object.Key} from bucket {s3Event.Bucket.Name}. Make sure they exist and your bucket is in the same region as this function.");
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
                throw;
            }
        }

        /// <summary>
        /// TESTING ONLY - run the project as a console application to test the <see cref="FunctionHandler"/>
        /// </summary>
        public static void Main()
        {
            // local debugging, send a simulated event
            var records = new List<S3EventNotification.S3EventNotificationRecord>();
            records.Add(
                new S3EventNotification.S3EventNotificationRecord
                {
                    S3 = new S3EventNotification.S3Entity
                    {
                        // TODO 1: Update the event bucket name
                        Bucket = new S3EventNotification.S3BucketEntity { Name = "REPLACE WITH BUCKET NAME" },
                        Object = new S3EventNotification.S3ObjectEntity { Key = "numbers.txt" }
                    }
                });

            var function = new Function();
            var task = function.FunctionHandler(new S3Event { Records = records }, null);
            task.Wait();
        }
    }
}
