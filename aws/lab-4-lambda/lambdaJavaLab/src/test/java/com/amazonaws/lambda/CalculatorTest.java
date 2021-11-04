package com.amazonaws.lambda;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.junit.Assert;
import org.junit.Test;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.s3.event.S3EventNotification;
import com.amazonaws.util.IOUtils;

public class CalculatorTest {

    @Test
    public void testCalculator() throws IOException {
    	
    	// Parse the src/test/resources/s3-event.put.json JSON file into an S3Event object
    	File initialFile = new File("src/test/resources/s3-event.put.json");
        InputStream stream = new FileInputStream(initialFile);
    	String json = IOUtils.toString(stream);
    	S3EventNotification eventNotification = S3EventNotification.parseJson(json);
    	S3Event event = new S3Event(eventNotification.getRecords());
    	
        // Create a Lambda fake context
        Context ctx = new TestContext();

        // Execute the Calculator function
        Calculator handler = new Calculator();
        String output = handler.handleRequest(event, ctx);
        
        // Test to see if the URL starts with https://
     	Assert.assertTrue(output.startsWith("Min:"));
    }
}
