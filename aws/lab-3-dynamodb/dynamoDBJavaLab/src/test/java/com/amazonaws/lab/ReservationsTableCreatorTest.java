package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import static org.junit.Assert.fail;

import org.junit.Test;

import com.amazonaws.services.dynamodbv2.model.ResourceNotFoundException;

public class ReservationsTableCreatorTest {

	@Test
	public void test() throws Exception {
		ReservationsTableCreator.main(new String[0]);
		try {
			ReservationsTableCreator.dynamoDBClient.describeTable(ReservationsTableCreator.RESERVATIONS_TABLE_NAME);
		} catch (ResourceNotFoundException e) {
			String msg = ReservationsTableCreator.RESERVATIONS_TABLE_NAME
					+ " %s table does not exist. Do not need to remove it.";
			fail(msg);
		}
	}
}
