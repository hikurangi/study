// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.SQS;
using Amazon.SQS.Model;
using System.Diagnostics;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;

namespace Lab5
{
  // The SQSConsumer class retrieves messages from an SQS queue
  public class SQSConsumer
  {
    public static readonly string QueueName = "MySQSQueue_A";
    private static AmazonSQSClient sqsClient = null;

    public static void main()
    {
      SQSConsumer sqsConsumer = new SQSConsumer();
      sqsConsumer.Init();
      sqsConsumer.ConsumeMessages();
    }

    private void Init()
    {
      sqsClient = CreateSQSClient();
    }

    public void ConsumeMessages()
    {
      Debug.WriteLine("SQSConsumer ...Thread running.");

      Order order = null;
      string queueUrl = null;

      queueUrl = GetURL();
      ReceiveMessageResponse receiveMessageResult = null;
      ReceiveMessageRequest request = CreateRequest(queueUrl);
      receiveMessageResult = GetMessageResult(request);

      Debug.WriteLine("Number of messages received this time: {0} ", receiveMessageResult.Messages.Count);

      // Retrieves all messages in the ReceiveMessageResult object
      foreach (Message mssg in receiveMessageResult.Messages)
      {
        // Adds message metadata to Order object
        string messageBody = mssg.Body;
        DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(Order));
        MemoryStream stream = new MemoryStream(Encoding.UTF8.GetBytes(messageBody));
        order = (Order)ser.ReadObject(stream);

        Debug.WriteLine("Order received from SQS queue: {0} ", order.MyOrderId);
        stream.Dispose();

        DeleteMessage(queueUrl, mssg);
      }

      System.Threading.Thread.Sleep(20000); // Wait 20 seconds
    }

    /**
     * Create an instance of the AmazonSQSClient class
     *
     * @return     AmazonSQSClient
     */
    private static AmazonSQSClient CreateSQSClient() => new AmazonSQSClient();

    /**
     * Retrieve the URL of the SQS queue by using the AmazonSQSClient
     * object and queueName constant for SQS queue name
     *
     * @return    URL
     */
    private static string GetURL() => sqsClient.GetQueueUrl(QueueName).QueueUrl;

    /**
     * Create an instance of the ReceiveMessageRequest class
     * Enable long polling (20 seconds) and set maximum number of messages to 10
     *
     * @param queueUrl    Queue URL
     * @return            ReceiveMessageRequest object
     */
    private static ReceiveMessageRequest CreateRequest(string queueUrl) => sqsClient.CreateRequest(new ReceiveMessageRequest
    {
      QueueUrl = queueUrl,
      WaitTimeSeconds = 20,
      MaxNumberOfMessages = 10
    })

    /**
     * Receive messages from the SQS queue by using the ReceiveMessageRequest object
     *
     * @param request   ReceiveMessageResult object
     * @return          List of messages
     */+
