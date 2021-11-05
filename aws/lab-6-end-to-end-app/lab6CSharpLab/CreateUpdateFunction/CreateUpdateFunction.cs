using System;
using Newtonsoft.Json;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace CreateUpdateFunction
{
    public class CreateUpdateFunction
    {
        /// <summary>
        /// PollyNotes-CreateUpdateFunction
        /// 
        /// This lambda function is integrated with the following API methods:
        /// /notes/POST
        /// 
        /// This function does the following:
        /// 
        /// 1. Takes a JSON payload from API gateway and converts it into a Note POCO <see cref="Note"/>
        /// 2. Creates or Updates the DynamoDB item based on the Note
        /// 3. Returns the noteId
        /// </summary>
        /// <param name="note">POCO of Note from the JSON payload from API GW to Lambda.</param>
        /// <param name="context">Lambda context</param>
        /// <returns>The noteId that was sent if there was a success</returns>
        public string FunctionHandler(Note note, ILambdaContext context)
        {
            // The note object contains a full Note with all parameters set from the API call /notes/POST
            // {
            //   "userId": "...",
            //   "noteId": "...",
            //   "note": "..."
            // }

            Console.WriteLine("Initiating PollyNotes-CreateUpdateFunction...");

            // Create the DynamoDB client and the Context for Object Persistence Model


            // Use the SaveAsync method to write the Note into DynamoDB and wait for it to complete


            // Return the noteId from the request
            return note.noteId;
        }

        /// <summary>
        /// TESTING ONLY - Run the project as a console application to test the <see cref="FunctionHandler"/>
        /// You should see the noteId back
        /// </summary>
        public static void Main()
        {
            string createTest = @"
            {  
                ""userId"": ""testuser"",
                ""noteId"": ""001"",
                ""note"": ""This is a test""
            }";
            string noteId = new CreateUpdateFunction().FunctionHandler(JsonConvert.DeserializeObject<Note>(createTest), null);
            Console.WriteLine(noteId);
        }
    }
}
