// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.SimpleNotificationService;
using System.Diagnostics;
using System.IO;
using System.Runtime.Serialization.Json;

namespace Lab5
{
    // The SNSPublisher class publishes messages to SNS topics.
    public class SNSPublisher
    {
        // TODO 1: Set ARN for SNS topic for email messages.
        private static string topicArnEmail = "<Email-SNS-Topic-ARN>";

        // TODO 2: Set ARN for SNS topic for order messages.
        private static string topicArnOrder = "<Order-SNS-Topic-ARN>";

        private static string emailSubject = "Status of pharmaceuticals order.";
        private static string emailMessage = "Your pharmaceutical supplies will be shipped 5 business days from the date of order.";
        private static string orderDetails = "Ibuprofen, Acetaminophen";
        public static readonly int NumberOfMessages = 10;
        private static AmazonSimpleNotificationServiceClient snsClient = null;

        public static void Main()
        {
            SNSPublisher snsPublisher = new SNSPublisher();
            snsPublisher.Init();
            snsPublisher.PublishMessages();
        }

        private void Init()
        {
            snsClient = CreateSNSClient();
        }

        private void PublishMessages()
        {
            PublishEmailMessage();
            PublishOrderMessages();
        }

        private void PublishOrderMessages()
        {
            string jsonOrder = null;
            // Order in JSON format.
            Order order = null;
            MemoryStream stream1 = null;
            DataContractJsonSerializer ser = null;
            StreamReader sr = null;

            for (int i = 1; i < (NumberOfMessages + 1); i++)
            {
                order = new Order(i, "2015/10/" + i, orderDetails);
                Debug.WriteLine("Publishing order to SNS topic: " + order.MyOrderId);

                stream1 = new MemoryStream();
                ser = new DataContractJsonSerializer(typeof(Order));
                ConvertOrderToJSON(order, stream1, ser);

                stream1.Position = 0;
                sr = new StreamReader(stream1);
                jsonOrder = sr.ReadToEnd().ToString();

                stream1.Dispose();
                PublishOrder(jsonOrder);
            }
        }

        /**
         * Create an instance of the AmazonSimpleNotificationServiceClient class
         *
         * @return     SNS Client
         */
        private static AmazonSimpleNotificationServiceClient CreateSNSClient()
        {
            // TODO 3: Replace the solution with your own code
            return Solution.CreateSNSClient();
        }

        /**
         * Publish a message to the SNS topic for email messages
         * Use the emailMessage and emailSubject constants as email content
         */
        private static void PublishEmailMessage()
        {
            // TODO 4: Replace the solution with your own code
            Solution.PublishEmailMessage(snsClient, topicArnEmail, emailMessage, emailSubject);
        }

        /**
         * Invoke the DataContractJsonSerializer object's WriteObject method
         * to convert the Order object to a JSON string
         *
         * @param order       The order
         * @param stream1     Memory Stream
         * @param ser         JSON Serializer
         */
        private static void ConvertOrderToJSON(Order order, MemoryStream stream1, DataContractJsonSerializer ser)
        {
            // TODO 5: Replace the solution with your own code
            Solution.ConvertOrderToJSON(order, stream1, ser);
        }

        /**
         * Publish the JSON-formatted order to the SNS topic for orders
         *
         * @param jsonOrder   The order in JSON format
         */
        private static void PublishOrder(string jsonOrder)
        {
            // TODO 6: Replace the solution with your own code
            Solution.PublishOrder(snsClient, topicArnOrder, jsonOrder);
        }
    }
}
