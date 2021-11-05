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

namespace ListFunction
{
    public class ListFunction
    {
        /// <summary>
        /// PollyNotes-ListFunction
        /// 
        /// This lambda function is integrated with the following API methods:
        /// /notes/GET
        /// 
        /// This function does the following:
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

            // Create the DynamoDB client and the Context for Object Persistence Model


            // Use the QueryAsync method to issue a query to DynamoDB based on the userId


            // Retrieve all of the notes based on the Query from DynamoDB using GetRemainingAsync and wait


            // Return the list of Note (currently returning an empty list)
            return new List<Note>();
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
            List<Note> noteList = new ListFunction().FunctionHandler(JsonConvert.DeserializeObject<Note>(listTest), null);
            Console.WriteLine(JsonConvert.SerializeObject(noteList));
        }
    }
}
