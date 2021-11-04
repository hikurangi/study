package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import static org.junit.Assert.*;

import org.junit.Test;

public class ReservationsStatisticsTest {

	@Test
	public void test() throws Exception {
		ReservationsStatistics.main(new String[] { "Reno" });
		assertEquals(178, ReservationsStatistics.itemCount, 0);
	}
}
