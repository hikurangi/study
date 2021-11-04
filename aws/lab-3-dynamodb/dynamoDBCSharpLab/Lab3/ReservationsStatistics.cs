// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;
using System.Collections.Generic;
using System.Diagnostics;

namespace Lab3
{
    // The ReservationsStatistics class queries the reservations table and reports the
    // total number of reservations in a city
    public static class ReservationsStatistics
    {
        public static readonly string ReservationsTableName = ReservationsTableCreator.ReservationsTableName;
        public static readonly string CityDateIndexName = ReservationsTableCreator.CityDateIndexName;
        private static AmazonDynamoDBClient dynamoDBClient = null;
        public static int itemCount = 0;

        public static void main(string[] args)
        {
            Init();

            try
            {
                QueryByCity(args[0]);
            }
            catch (AmazonServiceException ase)
            {
                /*
                 * AmazonServiceException represents an error response from an AWS service.
                 *
                 * AWS service received the request but either found it invalid
                 * or encountered an error trying to execute it.
                 */
                Debug.WriteLine("Error Message:" + ase.Message);
                Debug.WriteLine("HTTP Status Code:" + ase.StatusCode);
                Debug.WriteLine("AWS Error Code:" + ase.ErrorCode);
                Debug.WriteLine("Error Type:" + ase.ErrorType);
                Debug.WriteLine("Request ID:" + ase.RequestId);
            }
            catch (AmazonClientException ace)
            {
                /*
                 * AmazonClientException represents an error that occurred inside
                 * the client on the local host, either while trying to send the
                 * request to AWS or interpret the response.
                 * For example, if no network connection is available, the client
                 * won't be able to connect to AWS to execute a request and will
                 * throw an AmazonClientException.
                 */
                Debug.WriteLine("Error Message:" + ace.Message);
            }
        }

        public static int QueryByCity(string inputCity)
        {
            QueryResponse response = QueryCityRelatedItems(inputCity);

            Debug.WriteLine("-------------------------------------------------------------");

            string itemPID = null;
            string itemCity = null;
            string itemDate = null;

            foreach (Dictionary<string, AttributeValue> item in response.Items)
            {
                itemPID = item["CustomerID"].S;
                itemCity = item["City"].S;
                itemDate = item["Date"].S;

                Debug.WriteLine("{0} - {1} - {2}", itemPID, itemCity, itemDate);
                // Increments the itemCount variable to find the total number of
                // items returned by the query
                itemCount++;
            }

            Debug.WriteLine("-------------------------------------------------------------");
            Debug.WriteLine("Summary: Number of reservations in {0} city is {1}", inputCity, itemCount);
            return itemCount;
        }

        private static void Init()
        {
            dynamoDBClient = new AmazonDynamoDBClient();
        }

        /**
         * Create an instance of the QueryRequest class and query the global
         * secondary index by using the QueryRequest object defined
         *
         * @param inputCity     City
         */
        private static QueryResponse QueryCityRelatedItems(string inputCity)
        {
            // TODO 2: Replace the solution with your own code
            return Solution.QueryCityRelatedItems(dynamoDBClient, inputCity, ReservationsTableName, CityDateIndexName);
        }
    }
}
