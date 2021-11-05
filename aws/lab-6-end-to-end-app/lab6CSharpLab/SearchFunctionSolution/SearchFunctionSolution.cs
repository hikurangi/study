using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Lambda.Core;
using System.Threading.Tasks;


// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace SearchFunctionSolution
{
    public class SearchFunctionSolution
    {
        /// <summary>
        /// PollyNotes-SearchFunction
        /// 
        /// This lambda function is integrated with the following API methods:
        /// /notes/search/GET
        /// 
        /// This function does the following:
        /// 
        /// 1. Takes a JSON payload from API gateway and converts it into a Note POCO <see cref="Note"/>
        /// 2. Queries DynamoDB using the QueryAsync feature. It will use the userId for the Partition Key, but a Filter will need
        ///    to be applied to do the search based on the note text.
        /// 3. Returns the List of Note found
        /// </summary>
        /// <param name="note">POCO of Note from the JSON payload from API GW to Lambda. Only userId and note will be set.</param>
        /// <param name="context">Lambda context</param>
        /// <returns>List of Note from the Query to DynamoDB based on the userId and the note</returns>
        public List<Note> FunctionHandler(Note note, ILambdaContext context)
        {
            // The note object contains the userId and a partial note sent from API GW in the /notes/search/GET
            // {
            //   "userId": "...",
            //   "note": "..."
            // }

            Console.WriteLine("Initiating PollyNotes-SearchFunction...");
            Console.WriteLine("Note received: " + JsonConvert.SerializeObject(note));

            // Create the DynamoDB client and the Context for Object Persistence Model
            AmazonDynamoDBClient client = new AmazonDynamoDBClient();
            DynamoDBContext ddbcontext = new DynamoDBContext(client);

            // Create a DynamoDB Operation Config to pass in a QueryFilter on the note
            //  Since the note attribute isn't a key, we need to use a QueryFilter
            //  The QueryFilter takes a list of ScanCondition
            DynamoDBOperationConfig opConfig = new DynamoDBOperationConfig()
            {
                QueryFilter =
                        new List<ScanCondition>()
                        {
                            new ScanCondition("note", ScanOperator.Contains, note.note)
                        }
            };

            // Use the QueryAsync method to issue a query to DynamoDB based on the userId and QueryFilter
            //  We are using an Async command due to the .netcore SDK which doesn't support sync invokes
            //  We are using the Note POCO defined with the Object Persistence Model so all the data
            //   will be mapped to the right entries. The Table name is also defined in the POCO
            AsyncSearch<Note> noteQuery = ddbcontext.QueryAsync<Note>(note.userId, opConfig);

            // Retrieve all of the notes based on the Query from DynamoDB and wait
            Task<List<Note>> searchTask = noteQuery.GetRemainingAsync();
            searchTask.Wait();

            // Once the list of Note has been fetched entirely, check for Exceptions.
            // If there are no Exceptions
            if (searchTask.Exception == null)
            {
                Console.WriteLine("Successfully executed QueryAsync with userId: " + note.userId + " and text containing: " + note.note);

                // Log the Notes found
                Console.WriteLine("Notes found in DynamoDB: " + JsonConvert.SerializeObject(searchTask.Result));

                // Return the list
                return searchTask.Result;
            }
            else
            {
                // There was an exception, log the entry data and the exception
                Console.WriteLine("Unable to QueryAsync with userId: " + note.userId + " and text containing: " + note.note);
                Console.WriteLine(searchTask.Exception);

                // Return an empty list
                return new List<Note>();
            }
        }

        /// <summary>
        /// TESTING ONLY - Run the project as a console application to test the <see cref="FunctionHandler"/>
        /// You should see a list of Note
        /// </summary>
        public static void Main()
        {
            string searchTest = @"
            {  
                ""userId"":""testuser"",
                ""note"": ""test""
            }";
            List<Note> noteList = new SearchFunctionSolution().FunctionHandler(JsonConvert.DeserializeObject<Note>(searchTest), null);
            Console.WriteLine(JsonConvert.SerializeObject(noteList));
        }
    }
}
