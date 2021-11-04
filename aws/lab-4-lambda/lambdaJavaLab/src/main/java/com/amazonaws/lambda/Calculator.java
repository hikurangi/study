package com.amazonaws.lambda;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;

public class Calculator implements RequestHandler<S3Event, String> {

    private AmazonS3 s3 = AmazonS3ClientBuilder.standard().build();

    @Override
    public String handleRequest(S3Event event, Context context) {
        context.getLogger().log("Received event: " + event);
        
        String result = "No numbers found in file";
        
        // Get the object from the event and show its content type
        String bucket = event.getRecords().get(0).getS3().getBucket().getName();
        String key = event.getRecords().get(0).getS3().getObject().getKey();
        context.getLogger().log(String.format("New event: bucket %s, object %s", bucket, key));

        // Get the object contents
        S3Object object = s3.getObject(new GetObjectRequest(bucket, key));
        
        String responseBody;
		try {
			responseBody = getTextInputStream(object.getObjectContent());
		} catch (IOException e) {
			context.getLogger().log("Error converting from InputStream to String: " + e.getMessage());
			return "";
		}

        // Find matches of all positive or negative numbers
        List<String> allMatches = new ArrayList<String>();
        Matcher m = Pattern.compile("-?\\d+").matcher(responseBody);
        while (m.find()) {
            allMatches.add(m.group());
        }
        int[] numbers = allMatches.stream().mapToInt(Integer::parseInt).toArray();
        if (numbers.length > 0)
        {
            // Calculate min/max/average
            int min = Arrays.stream(numbers).min().orElse(-1);
            int max = Arrays.stream(numbers).max().orElse(-1);
            double average = Arrays.stream(numbers).average().orElse(Double.NaN);
            result = String.format("Min: %s Max: %s Average: %s", min, max, average);
        }

        context.getLogger().log(result);
        return result;
    }
    
    private static String getTextInputStream(InputStream input) throws IOException {
        // Extract string from InputStream
        StringBuilder textBuilder = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(input))) {
            int c = 0;
            
            while ((c = reader.read()) != -1) {
                textBuilder.append((char) c);
            }
        }
        return textBuilder.toString();
    }
}