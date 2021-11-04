// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using System.Collections.Generic;
using System.Diagnostics;
using Newtonsoft.Json;

namespace Lab3
{
    // The ReservationsReportLinker class updates DynamoDB items with the corresponding
    // link to a customer's report on S3
    public static class CustomerReportLinker
    {
        public static readonly string ReservationsTableName = ReservationsTableCreator.ReservationsTableName;
        public static readonly string CustomerReportPrefix = Utils.CustomerReportPrefix;
        public static readonly string S3BucketName = Utils.LabS3BucketName;
        public static readonly string S3BucketRegion = Utils.LabS3BucketRegion;
        public static AmazonDynamoDBClient dynamoDBClient = null;

        public static void main()
        {
            Init();
            LinkCustomerReport();
        }

        private static void LinkCustomerReport()
        {
            string reportUrl = null;
            string objectKey = null;

            // Sample reports exist for customer ids 1, 2, 3
            for (int i = 1; i < 4; i++)
            {
                objectKey = CustomerReportPrefix + i + ".txt";
                reportUrl = "https://s3-" + S3BucketRegion + ".amazonaws.com/" + S3BucketName + "/" + objectKey;
                UpdateItemWithLink(("" + i), reportUrl);
            }
        }

        private static void UpdateItemWithLink(string customerId, string reportUrl)
        {
            Debug.WriteLine("Updating item customerId: {0}, reportURL: {1}", customerId, reportUrl);

            UpdateItemRequest requestUpdate = new UpdateItemRequest
            {
                TableName = ReservationsTableName,
                Key = new Dictionary<string, AttributeValue>()
                        {
                            { "CustomerID", new AttributeValue { S = customerId } }
                        },
                ExpressionAttributeNames = new Dictionary<string, string>()
                        {
                            { "#curl", "CustomerReportUrl" },
                        },
                ExpressionAttributeValues = new Dictionary<string, AttributeValue>()
                        {
                             { ":val1", new AttributeValue {S = reportUrl} },
                        },
                // This expression does the following:
                // Adds a new attribute to the item
                UpdateExpression = "SET #curl = :val1"
            };

            UpdateItemResponse responseUpdate = UpdateItem(requestUpdate);
            Debug.WriteLine("Printing item after adding attribute:");

            string jsonDisplayText = JsonConvert.SerializeObject(responseUpdate);
            Debug.WriteLine("Display item.");
            Debug.WriteLine(jsonDisplayText);
        }

        private static void Init()
        {
            dynamoDBClient = new AmazonDynamoDBClient();
        }

        /**
         * Update the item in the table
         *
         * @param requestUpdate     Update Item Request
         * @return                  Order
         */
        private static UpdateItemResponse UpdateItem(UpdateItemRequest requestUpdate)
        {
            // TODO 3: Replace the solution with your own code
            return Solution.UpdateItem(dynamoDBClient, requestUpdate);
        }
    }
}
