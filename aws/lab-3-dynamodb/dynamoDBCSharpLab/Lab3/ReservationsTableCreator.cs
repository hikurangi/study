// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;
using System.Collections.Generic;
using System.Diagnostics;

namespace Lab3
{
    // The ReservationsTableCreator class creates a table and global secondary
    // index to store data about reservations.
    public static class ReservationsTableCreator
    {
        public static readonly string ReservationsTableName = "Reservations";
        public static readonly string CityDateIndexName = "ReservationsByCityDate";
        public static AmazonDynamoDBClient dynamoDBClient = null;

        // Entry
        public static void main()
        {
            Init();

            // In this sample, we will use the Document API to create our
            // designed DynamoDB table.
            try
            {
                RemoveReservationsTableIfExists();
                CreateReservationsTable();
            }
            catch (AmazonServiceException ase)
            {
                /*
                * AmazonServiceException represents an error response from an
                * AWS service.  AWS service received the request but either
                * found it invalid or encountered an error trying to execute it.
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
                 * AmazonClientException represents an error that occurred
                 * inside the client on the local host, either while trying to
                 * send the request to AWS or interpret the response.
                 * For example, if no network connection is available, the
                 * client won't be able to connect to AWS to execute a request
                 * and will throw an AmazonClientException.
                 */
                Debug.WriteLine("Error Message:" + ace.Message);
            }
        }

        private static void CreateReservationsTable()
        {
            // Create an instance of a GlobalSecondaryIndex class
            GlobalSecondaryIndex gsi = new GlobalSecondaryIndex
            {
                IndexName = CityDateIndexName,
                ProvisionedThroughput = new ProvisionedThroughput
                {
                    ReadCapacityUnits = 5L,
                    WriteCapacityUnits = 5L
                },
                Projection = new Projection { ProjectionType = "ALL" }
            };

            var indexKeySchema = new List<KeySchemaElement>
            {
                { new KeySchemaElement { AttributeName = "City", KeyType = "HASH"} },
                { new KeySchemaElement{AttributeName = "Date",KeyType = "RANGE"} },
            };
            gsi.KeySchema = indexKeySchema;

            // Create attribute definitions for CustomerId, City, Date.
            var attributeDefinitions = new List<AttributeDefinition>()
            {
                {
                    new AttributeDefinition {
                        AttributeName = "CustomerID",
                        AttributeType = "S",
                    }
                },
                {
                    new AttributeDefinition {
                        AttributeName = "City",
                        AttributeType = "S",
                    }
                },
                {
                    new AttributeDefinition() {
                        AttributeName = "Date",
                        AttributeType = "S",
                    }
                },
            };
            // Table key schema
            var tableKeySchema = new List<KeySchemaElement>()
            {
                {
                    new KeySchemaElement {
                        AttributeName = "CustomerID",
                        KeyType = "HASH"
                    }
                }
            };

            Debug.WriteLine("Creating DynamoDB table.");
            CreateReservationsTableWithIndex(attributeDefinitions, tableKeySchema, gsi);

            string status = null;
            do
            {
                status = GetTableStatus();
            } while (status != TableStatus.ACTIVE);

            Debug.WriteLine("Reservations table successfully created.");
        }

        private static void RemoveReservationsTableIfExists()
        {
            try
            {
                string tableName = ReservationsTableName;
                Debug.WriteLine("Attempting to delete DynamoDB Reservations table if one already exists.");

                var request = new DeleteTableRequest { TableName = tableName };
                dynamoDBClient.DeleteTable(request);
            }
            catch (ResourceNotFoundException e)
            {
                Debug.Write("{0} table does not exist. Do not need to remove it. \n", ReservationsTableName + " " + e.Message);
            }
        }

        private static void Init()
        {
            dynamoDBClient = new AmazonDynamoDBClient();
        }

        /**
         * Check the table's status using the DescribeTable method
         * Wait for the table to become active
         *
         * @return      Table Status
         */
        private static string GetTableStatus()
        {
            string status = null;
            System.Threading.Thread.Sleep(5000);
            try
            {
                var res = dynamoDBClient.DescribeTable(new DescribeTableRequest
                {
                    TableName = ReservationsTableName
                });
                status = res.Table.TableStatus;
            }
            catch (AmazonDynamoDBException ex)
            {
                Debug.WriteLine("An exception has occured: " + ex.Message);
            }
            return status;
        }

        /**
         * Create an instance of CreateTableRequest class
         * Create table using the request defined
         *
         * @param attributeDefinitions    Attribute definitions for the table
         * @param tableKeySchema          Table's key schema
         * @param gsi                     Global secondary index
         */
        private static void CreateReservationsTableWithIndex(List<AttributeDefinition> attributeDefinitions, List<KeySchemaElement> tableKeySchema, GlobalSecondaryIndex gsi)
        {
            CreateTableRequest request = new CreateTableRequest
            {
                TableName = ReservationsTableName,
                ProvisionedThroughput = new ProvisionedThroughput
                {
                    ReadCapacityUnits = 5L,
                    WriteCapacityUnits = 10L
                },
                AttributeDefinitions = attributeDefinitions,
                KeySchema = tableKeySchema,
                GlobalSecondaryIndexes = { gsi },
            };
            dynamoDBClient.CreateTable(request);
        }
    }
}
