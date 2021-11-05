package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import static org.junit.Assert.fail;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.Test;

import com.amazonaws.services.sqs.AmazonSQSClient;
import com.amazonaws.services.sqs.AmazonSQSClientBuilder;
import com.amazonaws.services.sqs.model.GetQueueAttributesResult;
import com.amazonaws.services.sqs.model.GetQueueUrlResult;

public class SqsSnsTest {

	public static final String QUEUE_NAME = SQSConsumer.QUEUE_NAME;
	private static final String QUEUE_ATTR_NAME = "ApproximateNumberOfMessages";
	private static final int SLEEP = 10000;

	private static String queueUrl = null;

	private AmazonSQSClient sqsClient = null;

	@Test
	public void test() throws Exception {
		try {
			init();
			queueUrl = getQueueUrl();

			int initialNumMessages = getNumberOfMessages();

			SNSPublisher.main(new String[0]);

			int numAfterSnsPublisher = getNumberOfMessages();

			SQSConsumer.main(new String[0]);

			int numAfterSQSConsumer = getNumberOfMessages();

			String format = "SqsSnsTest: initialNumMessages: %d; numAfterSnsPublisher: %d; numAfterSQSConsumer %d%n";
			String msg = String.format(format, initialNumMessages, numAfterSnsPublisher, numAfterSQSConsumer);

			System.out.println(msg);

			if ((numAfterSnsPublisher <= initialNumMessages) || (initialNumMessages != numAfterSQSConsumer)) {
				fail("SqsSnsTest failed. Number of messages in queue not as expected.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}

		System.out.println("SqsSnsTest passed.");
	}

	private void init() throws Exception {
		sqsClient = (AmazonSQSClient) AmazonSQSClientBuilder.standard().build();
	}

	private String getQueueUrl() {
		GetQueueUrlResult queueUrlResult = sqsClient.getQueueUrl(QUEUE_NAME);
		String queueUrl = queueUrlResult.getQueueUrl();
		return queueUrl;
	}

	private int getNumberOfMessages() {
		System.out.printf("SqsSnsTest Thread sleeping for %d milliseconds...", SLEEP);
		try {
			Thread.sleep(SLEEP);
		} catch (InterruptedException ie) {
		}
		System.out.println("SqsSnsTest Thread running.");

		int numMessages = 0;
		List<String> attributeNames = new ArrayList<String>();
		attributeNames.add(QUEUE_ATTR_NAME);
		GetQueueAttributesResult attrResult = sqsClient.getQueueAttributes(queueUrl, attributeNames);
		Map<String, String> attrValueMap = attrResult.getAttributes();
		String attrValue = attrValueMap.get(QUEUE_ATTR_NAME);

		if (attrValue != null) {
			numMessages = Integer.parseInt(attrValue);
		}
		return numMessages;
	}
}