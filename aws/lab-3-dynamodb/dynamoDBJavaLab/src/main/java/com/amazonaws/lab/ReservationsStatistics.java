package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import java.util.Iterator;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.ItemCollection;
import com.amazonaws.services.dynamodbv2.document.QueryOutcome;

// The ReservationsStatistics class queries the reservations table and reports the total number of reservations in a city.
public class ReservationsStatistics {

	// City for which number of reservations must be queried
	public static final String inputCity = "Reno";

	public static int itemCount = 0;

	private static final String RESERVATIONS_TABLE_NAME = ReservationsTableCreator.RESERVATIONS_TABLE_NAME;
	private static final String CITY_DATE_INDEX_NAME = ReservationsTableCreator.CITY_DATE_INDEX_NAME;

	private static DynamoDB dynamoDB = null;
	private static AmazonDynamoDB dynamoDBClient = null;

	public static void main(String[] args) throws Exception {

		try {
			// Instantiate DynamoDB client and object

			// Instantiate DynamoDB client and object
			dynamoDBClient = AmazonDynamoDBClientBuilder.standard().build();

			dynamoDB = new DynamoDB(dynamoDBClient);

			// Query items for a city
			ItemCollection<QueryOutcome> items = queryCityRelatedItems(dynamoDB, RESERVATIONS_TABLE_NAME,
					CITY_DATE_INDEX_NAME, inputCity);

			System.out.println("-------------------------------------------------------------");

			// Retrieve a reference to an iterator from the ItemCollection object returned
			// by the query.
			Iterator<Item> itemIterator = items.iterator();
			Item item = null;
			// Iterate over items
			while (itemIterator.hasNext()) {
				// Count the number of items
				itemCount++;
				item = itemIterator.next();
				System.out.printf("%s - %s - %s %n", item.getString("CustomerId"), item.getString("City"),
						item.getString("Date"));
			}
			System.out.println("-------------------------------------------------------------");
			System.out.printf("Summary: Number of reservations in %s city is %d %n", inputCity, itemCount);

		} catch (AmazonServiceException ase) {
			System.out.println("Error Message:    " + ase.getMessage());
			System.out.println("HTTP Status Code: " + ase.getStatusCode());
			System.out.println("AWS Error Code:   " + ase.getErrorCode());
			System.out.println("Error Type:       " + ase.getErrorType());
			System.out.println("Request ID:       " + ase.getRequestId());
		} catch (AmazonClientException ace) {
			System.out.println("Error Message: " + ace.getMessage());
		}
	}

	/**
	 * Query the reservations table to retrieve the items that relate to the given
	 * city
	 *
	 * @param dynamoDB
	 *            Instance of DynamoDB class
	 * @param reservationsTableName
	 *            Table name
	 * @param cityDateGsiName
	 *            Global secondary index
	 * @param inputCity
	 *            City
	 * @return Query results
	 */
	public static ItemCollection<QueryOutcome> queryCityRelatedItems(DynamoDB dynamoDB, String reservationsTableName,
			String cityDateGlobalSecondaryIndexName, String inputCity) {
		// TODO 2: Replace the solution with your own code
		return Solution.queryCityRelatedItems(dynamoDB, reservationsTableName, cityDateGlobalSecondaryIndexName, inputCity);
	}
}
