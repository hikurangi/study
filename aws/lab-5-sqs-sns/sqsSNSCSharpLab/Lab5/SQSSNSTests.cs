// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Amazon.SQS;
using System.Diagnostics;
using Amazon.SQS.Model;

namespace Lab5
{
    [TestClass]
    public class SQSSNSTests
    {
        public static readonly string QueueName = SQSConsumer.QueueName;
        private static int sleep = 10000;
        private static string queueUrl = null;
        private AmazonSQSClient sqsClient = null;

       [TestMethod]
       public void TestSQSSNS()
        {
            try
            {
                Init();
                queueUrl = GetQueueUrl();
                int initialNumMessages = GetNumberOfMessages();
                SNSPublisher.Main();
                int numAfterSnsPublisher = GetNumberOfMessages();
                SQSConsumer.main();
                int numAfterSQSConsumer = GetNumberOfMessages();
                Debug.WriteLine("SqsSnsTest: initialNumMessages: {0}, numAfterSNSPublisher: {1}, numAfterSQSConsumer: {2}", initialNumMessages, numAfterSnsPublisher, numAfterSQSConsumer);
                if ((numAfterSnsPublisher < initialNumMessages) || (numAfterSQSConsumer > numAfterSnsPublisher ))
                {
                    Assert.Fail("SqsSnsTest failed. Number of messages in queue not as expected.");
                }
            }
            catch(Exception)
            {
                throw;
            }
            Debug.WriteLine("SqsSnsTest passed.");
        }

        private int GetNumberOfMessages()
        {
            Debug.WriteLine("SqsSnsTest Thread sleeping for {0} seconds...", sleep/1000);
            System.Threading.Thread.Sleep(sleep);
            Debug.WriteLine("SqsSnsTest ...Thread running.");

            int numMessages = 0;
            ReceiveMessageRequest request = new ReceiveMessageRequest(queueUrl);
            request.VisibilityTimeout = 0; //The visibility timeout is set to 0 to keep the number of messages in the queue consistent.
            request.WaitTimeSeconds = 20;
            request.MaxNumberOfMessages = 10;
            ReceiveMessageResponse receiveMessageResult = sqsClient.ReceiveMessage(request);
            numMessages = receiveMessageResult.Messages.Count;
            return numMessages;
        }

        private string GetQueueUrl()
        {
            GetQueueUrlResponse queueUrlResult = sqsClient.GetQueueUrl(QueueName);
            string queueUrl = queueUrlResult.QueueUrl;
            return queueUrl;
        }

        private void Init()
        {
            sqsClient = new AmazonSQSClient();
        }
    }
}
