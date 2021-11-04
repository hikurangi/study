// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using System.Collections.Generic;
using System.Diagnostics;
using Newtonsoft.Json;
using System;

namespace Lab3
{
    class Solution
    {
        public static void AddItemToTable(AmazonDynamoDBClient dynamoDBClient, string[] reservationsDataAttrValues, string ReservationsTableName)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "AddItemToTable"));
            var requestReservationsListing = new PutItemRequest
            {
                TableName = ReservationsTableName,
                Item = new Dictionary<string, AttributeValue>()
                {
                    { "CustomerID", new AttributeValue { S = reservationsDataAttrValues[0] } },
                    { "City",      new AttributeValue { S = reservationsDataAttrValues[1] } },
                    { "Date",      new AttributeValue { S = reservationsDataAttrValues[2] } },
                }
            };
            dynamoDBClient.PutItem(requestReservationsListing);
        }

        public static QueryResponse QueryCityRelatedItems(AmazonDynamoDBClient dynamoDBClient, string inputCity, string ReservationsTableName, string CityDateIndexName)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "QueryCityRelatedItems"));
            QueryRequest request = new QueryRequest
            {
                TableName = ReservationsTableName,
                IndexName = CityDateIndexName,
                KeyConditionExpression = "City = :v_city",
                ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                {
                    { ":v_city", new AttributeValue { S = inputCity } }
                }
            };

            QueryResponse response = dynamoDBClient.Query(request);
            return response;
        }

        public static UpdateItemResponse UpdateItem(AmazonDynamoDBClient dynamoDBClient, UpdateItemRequest requestUpdate)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "UpdateItem"));
            UpdateItemResponse response = dynamoDBClient.UpdateItem(requestUpdate);
            return response;
        }
    }
}
