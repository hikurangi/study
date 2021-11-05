// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.SQS;
using Amazon.SQS.Model;
using Amazon.SimpleNotificationService;
using System.IO;
using System.Runtime.Serialization.Json;
using System;
using System.Diagnostics;


namespace Lab5
{
    class Solution
    {
        public static AmazonSimpleNotificationServiceClient CreateSNSClient()
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "CreateSNSClient"));
            AmazonSimpleNotificationServiceClient snsClient = new AmazonSimpleNotificationServiceClient();
            return snsClient;
        }

        public static void PublishEmailMessage(AmazonSimpleNotificationServiceClient snsClient, string topicArnEmail, string emailMessage, string emailSubject)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "PublishEmailMessage"));
            snsClient.Publish(topicArnEmail, emailMessage, emailSubject);
        }

        public static void ConvertOrderToJSON(Order order, MemoryStream stream1, DataContractJsonSerializer ser)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "ConvertOrderToJSON"));
            ser.WriteObject(stream1, order);
        }

        public static void PublishOrder(AmazonSimpleNotificationServiceClient snsClient, string topicArnOrder, string jsonOrder)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "PublishOrder"));
            snsClient.Publish(topicArnOrder, jsonOrder);
        }

        public static AmazonSQSClient CreateSQSClient()
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "CreateSQSClient"));
            AmazonSQSClient sqsClient = new AmazonSQSClient();
            return sqsClient;
        }

        public static string GetURL(AmazonSQSClient sqsClient, string QueueName)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "GetURL"));
            GetQueueUrlResponse queueUrlResponse = sqsClient.GetQueueUrl(QueueName);
            string queueUrl = queueUrlResponse.QueueUrl;
            return queueUrl;
        }

        public static ReceiveMessageRequest CreateRequest(string queueUrl)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "CreateRequest"));
            ReceiveMessageRequest request = new ReceiveMessageRequest(queueUrl);
            request.WaitTimeSeconds = 20;
            request.MaxNumberOfMessages = 10;
            return request;
        }

        public static ReceiveMessageResponse GetMessageResult(AmazonSQSClient sqsClient, ReceiveMessageRequest request)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "GetMessageResult"));
            ReceiveMessageResponse receiveMessageResult = sqsClient.ReceiveMessage(request);
            return receiveMessageResult;
        }

        public static void DeleteMessage(AmazonSQSClient sqsClient, string queueUrl, Message message)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "DeleteMessage"));
            string messageReceiptHandle = message.ReceiptHandle;
            sqsClient.DeleteMessage(queueUrl, messageReceiptHandle);
        }
    }
}
