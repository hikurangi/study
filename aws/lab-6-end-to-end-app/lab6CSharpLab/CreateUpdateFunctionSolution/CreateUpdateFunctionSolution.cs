using System;
using Newtonsoft.Json;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace CreateUpdateFunctionSolution
{
    public class CreateUpdateFunctionSolution
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
            Console.WriteLine("Note received: " + JsonConvert.SerializeObject(note));

            // Create the DynamoDB client and the Context for Object Persistence Model
            AmazonDynamoDBClient client = new AmazonDynamoDBClient();
            DynamoDBContext ddbcontext = new DynamoDBContext(client);

            // Use the SaveAsync method to write the Note into DynamoDB and wait for it to complete
            //  If an item exists with the userId and noteId of the note, it will replace the note attribute
            //  If it doesn't, it will create the item
            var createUpdateTask = ddbcontext.SaveAsync(note);
            createUpdateTask.Wait();

            // If there are no Exceptions
            if (createUpdateTask.Exception == null)
            {
                Console.WriteLine("Successfully executed SaveAsync with userId: " + note.userId + ", noteId: " + note.noteId + " and note: " + note.note);

                // Return the noteId from the request
                return note.noteId;
            }
            else
            {
                // There was an exception, log the entry data and the exception
                Console.WriteLine("Unable to SaveAsync note with userId: " + note.userId + ", noteId: " + note.noteId);
                Console.WriteLine(createUpdateTask.Exception);

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
            string createTest = @"
            {  
                ""userId"": ""testuser"",
                ""noteId"": ""001"",
                ""note"": ""This is a test""
            }";
            string noteId = new CreateUpdateFunctionSolution().FunctionHandler(JsonConvert.DeserializeObject<Note>(createTest), null);
            Console.WriteLine(noteId);
        }
    }
}
