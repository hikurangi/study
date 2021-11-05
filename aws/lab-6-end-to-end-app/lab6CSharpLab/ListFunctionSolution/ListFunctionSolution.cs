using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Lambda.Core;
using System.Threading;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace ListFunctionSolution
{
    public class ListFunctionSolution
    {
        /// <summary>
        /// PollyNotes-ListFunction
        /// 
        /// This lambda function is integrated with the following API methods:
        /// /notes/GET
        /// 
        /// This function does the following:
        /// 
        /// 1. Takes a JSON payload from API gateway and converts it into a Note POCO <see cref="Note"/>
        /// 2. Queries DynamoDB based on that payload using the QueryAsync feature
        /// 3. Returns the List of Note found
        /// </summary>
        /// <param name="note">POCO of Note from the JSON payload from API GW to Lambda. In this case, it will only have the userId set</param>
        /// <param name="context">Lambda context</param>
        /// <returns>List of Note from the Query to DynamoDB based on the userId</returns>
        public List<Note> FunctionHandler(Note note, ILambdaContext context)
        {
            // The note object only contains the userId as it's the only parameter sent in the /notes/GET
            // {
            //   "userId": "..."
            // }

            Console.WriteLine("Initiating PollyNotes-ListFunction...");
            Console.WriteLine("Note received: " + JsonConvert.SerializeObject(note));

            // Create the DynamoDB client and the Context for Object Persistence Model
            AmazonDynamoDBClient client = new AmazonDynamoDBClient();
            DynamoDBContext ddbcontext = new DynamoDBContext(client);

            // Use the QueryAsync method to issue a query to DynamoDB based on the userId
            //  We are using an Async command due to the .netcore SDK which doesn't support sync invokes
            //  We are using the Note POCO defined with the Object Persistence Model so all the data
            //   will be mapped to the right entries. The Table name is also defined in the POCO
            AsyncSearch<Note> noteQuery = ddbcontext.QueryAsync<Note>(note.userId);

            // Retrieve all of the notes based on the Query from DynamoDB and wait
            Task<List<Note>> listTask = noteQuery.GetRemainingAsync();
            listTask.Wait();

            // Once the list has been fetched entirely, check for Exceptions.
            // If there are no Exceptions
            if (listTask.Exception == null)
            {
                Console.WriteLine("Successfully executed QueryAsync with userId: " + note.userId);

                // Log the Notes found
                Console.WriteLine("Notes found in DynamoDB: " + JsonConvert.SerializeObject(listTask.Result));

                // Return the list
                return listTask.Result;
            }
            else
            {
                // There was an exception, log the entry data and the exception
                Console.WriteLine("Unable to QueryAsync note with userId: " + note.userId);
                Console.WriteLine(listTask.Exception);

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
            string listTest = @"
            {  
                ""userId"":""testuser""
            }";
            List<Note> noteList = new ListFunctionSolution().FunctionHandler(JsonConvert.DeserializeObject<Note>(listTest), null);
            Console.WriteLine(JsonConvert.SerializeObject(noteList));
        }
    }
}
