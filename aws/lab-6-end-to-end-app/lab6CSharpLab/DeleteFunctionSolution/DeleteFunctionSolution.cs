using System;
using Newtonsoft.Json;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace DeleteFunctionSolution
{
    public class DeleteFunctionSolution
    {

        /// <summary>
        /// PollyNotes-DeleteFunction
        /// 
        /// This lambda function is integrated with the following API methods:
        /// /notes/{id}/DELETE
        /// 
        /// This function does the following:
        /// 
        /// 1. Takes a JSON payload from API gateway and converts it into a Note POCO <see cref="Note"/>
        /// 2. Deletes the DynamoDB item based on the Note received using the userId and noteId
        /// 3. Returns the noteId
        /// </summary>
        /// <param name="note">POCO of Note from the JSON payload from API GW to Lambda. Only the userId and noteId are passed.</param>
        /// <param name="context">Lambda context</param>
        /// <returns>The noteId that was sent if there was a success</returns>
        public string FunctionHandler(Note note, ILambdaContext context)
        {
            // The note object contains the userId and noteId sent from API GW in the /notes/{id}/DELETE
            // {
            //   "userId": "...",
            //   "noteId": "..."
            // }

            Console.WriteLine("Initiating PollyNotes-DeleteFunction...");
            Console.WriteLine("Note received: " + JsonConvert.SerializeObject(note));

            // Create the DynamoDB client and the Context for Object Persistence Model
            AmazonDynamoDBClient client = new AmazonDynamoDBClient();
            DynamoDBContext ddbcontext = new DynamoDBContext(client);

            // Use the DeleteAsync method to delete the Note from DynamoDB and wait for it to complete
            var deleteTask = ddbcontext.DeleteAsync(note);
            deleteTask.Wait();

            // If there are no Exceptions
            if (deleteTask.Exception == null)
            {
                Console.WriteLine("Successfully executed DeleteAsync note with userId: " + note.userId + " and noteId: " + note.noteId);

                // Return the noteId from the request
                return note.noteId;
            }
            else
            {
                // There was an exception, log the entry data and the exception
                Console.WriteLine("Unable to DeleteAsync note with userId: " + note.userId + " and noteId: " + note.noteId);
                Console.WriteLine(deleteTask.Exception);

                // Return an empty string
                return "";
            }
        }

        /// <summary>
        /// TESTING ONLY - Run the project as a console application to test the <see cref="FunctionHandler"/>
        /// You should see the noteId back
        /// </summary>
        public static void Main()
        {
            string deleteTest = @"
            {  
                ""userId"": ""testuser"",
                ""noteId"": ""001""
            }";
            string noteId = new DeleteFunctionSolution().FunctionHandler(JsonConvert.DeserializeObject<Note>(deleteTest), null);
            Console.WriteLine(noteId);
        }
    }
}
