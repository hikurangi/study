package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Index;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.ItemCollection;
import com.amazonaws.services.dynamodbv2.document.PutItemOutcome;
import com.amazonaws.services.dynamodbv2.document.QueryOutcome;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.document.UpdateItemOutcome;
import com.amazonaws.services.dynamodbv2.document.spec.UpdateItemSpec;
import com.amazonaws.services.dynamodbv2.document.utils.NameMap;
import com.amazonaws.services.dynamodbv2.document.utils.ValueMap;
import com.amazonaws.services.dynamodbv2.model.ReturnValue;

public class Solution {

	// Solution for method in the ReservationsDataUploader class
	public static PutItemOutcome addItemToTable(Table table, String customerId, String city, String date) {
		System.out.printf(
				"\nRUNNING SOLUTION CODE: %s! Follow the steps in the lab guide to replace this method with your own implementation.\n",
				"addItemToTable");

		// Create Item object
		Item item = new Item().withPrimaryKey("CustomerId", customerId).withString("City", city).withString("Date", date);

		// Add item to table
		PutItemOutcome outcome = table.putItem(item);
		return outcome;
	}

	// Solution for method in the ReservationsStatistics class
	public static ItemCollection<QueryOutcome> queryCityRelatedItems(DynamoDB dynamoDB, String reservationsTableName,
			String cityDateGlobalSecondaryIndexName, String inputCity) {

		System.out.printf(
				"\nRUNNING SOLUTION CODE: %s! Follow the steps in the lab guide to replace this method with your own implementation.\n",
				"queryCityRelatedItems");

		// Get the object corresponding to the reservations table
		Table reservationsTable = dynamoDB.getTable(reservationsTableName);

		// Retrieve global secondary index
		Index index = reservationsTable.getIndex(cityDateGlobalSecondaryIndexName);

		// Invoke the query
		ItemCollection<QueryOutcome> items = index.query("City", inputCity);

		// Return the item collection returned by the query
		return items;
	}

	// Solution for method in CustomerReportLinker class
	public static UpdateItemOutcome updateItemWithLink(DynamoDB dynamoDB, String tableName, String customerId,
			String reportUrl) {
		System.out.printf(
				"\nRUNNING SOLUTION CODE: %s! Follow the steps in the lab guide to replace this method with your own implementation.\n",
				"updateItemWithLink");

		// Get the table object for the table to be updated
		Table table = dynamoDB.getTable(tableName);

		// Create an instance of the UpdateItemSpec class to add an attribute called
		// CustomerReportUrl and the attribute's value.
		// Use customerId as the primary key
		UpdateItemSpec updateItemSpec = new UpdateItemSpec().withPrimaryKey("CustomerId", customerId)
				.withUpdateExpression("set #purl = :val1").withNameMap(new NameMap().with("#purl", "CustomerReportUrl"))
				.withValueMap(new ValueMap().withString(":val1", reportUrl)).withReturnValues(ReturnValue.ALL_NEW);

		// Update the item in the table.
		UpdateItemOutcome outcome = table.updateItem(updateItemSpec);
		return outcome;
	}
}
