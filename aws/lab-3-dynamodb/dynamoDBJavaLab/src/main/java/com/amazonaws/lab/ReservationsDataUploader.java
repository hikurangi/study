package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.PutItemOutcome;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.S3Object;

// The reservationsDataUploader class reads reservations data from a file and uploads each item to the reservations table.
public class ReservationsDataUploader {

	public static final String RESERVATIONS_TABLE_NAME = ReservationsTableCreator.RESERVATIONS_TABLE_NAME;
	public static final String S3_BUCKET_NAME = Utils.LAB_S3_BUCKET_NAME;
	public static final String S3_BUCKET_REGION = Utils.LAB_S3_BUCKET_REGION;
	public static final String RESERVATIONS_DATA_FILE_KEY = Utils.RESERVATIONS_DATA_FILE_KEY;

	private static DynamoDB dynamoDB = null;
	private static AmazonDynamoDB dynamoDBClient = null;
	private static AmazonS3 s3 = null;

	public static int numItemsAdded = 0;

	public static void main(String[] args) throws Exception {

		// Instantiate DynamoDB client and object
		dynamoDBClient = AmazonDynamoDBClientBuilder.standard().build();

		dynamoDB = new DynamoDB(dynamoDBClient);

		// Instantiate S3 client
		s3 = AmazonS3ClientBuilder.standard().withRegion(S3_BUCKET_REGION).build();

		S3Object reservationsDataObject = null;
		BufferedReader br = null;
		String line = "";
		String splitter = ",";
		PutItemOutcome outcome = null;

		try {
			// Retrieve the reservations data file from the S3 bucket
			reservationsDataObject = s3.getObject(S3_BUCKET_NAME, RESERVATIONS_DATA_FILE_KEY);
			if (reservationsDataObject == null) {
				System.out.println("Unable to retrieve reservations data file");
				return;
			}

			// Retrieve the Table object for the reservations table
			Table table = dynamoDB.getTable(RESERVATIONS_TABLE_NAME);

			br = new BufferedReader(new InputStreamReader(reservationsDataObject.getObjectContent()));
			// Skip the first line because it contains headings
			br.readLine();

			while ((line = br.readLine()) != null) {
				// Split line into values using comma as the separator
				String[] reservationsDataAttrValues = line.split(splitter);

				if (!reservationsDataAttrValues[0].equals("CustomerId")) {

					// Add an item corresponding to the values in the line
					// CSV attributes: CustomerId, City, Date
					outcome = addItemToTable(table, reservationsDataAttrValues[0], reservationsDataAttrValues[1],
							reservationsDataAttrValues[2]);

					if (outcome != null) {
						numItemsAdded++;
						System.out.println("Added item:" + line);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			numItemsAdded = 0;
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			System.out.println("\nNumber of items added: " + numItemsAdded);
		}
		System.out.println("Data upload complete");
	}

	/**
	 * Add a record to the DynamoDB table
	 *
	 * @param table
	 *            Table object to update
	 * @param customerId
	 *            Customer ID
	 * @param city
	 *            City
	 * @param date
	 *            Date
	 * @return Addition result
	 */
	public static PutItemOutcome addItemToTable(Table table, String customerId, String city, String date) {
		// TODO 1: Replace the solution with your own code
		return Solution.addItemToTable(table, customerId, city, date);
	}
}
