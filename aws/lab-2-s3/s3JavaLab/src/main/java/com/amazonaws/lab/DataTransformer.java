package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;

// The DataTransformer class transforms objects in the input S3 bucket
// and puts the transformed objects into the output S3 bucket.
public class DataTransformer {

	// TODO 1: Set input bucket name (must be globally unique)
	public static final String INPUT_BUCKET_NAME = "<dns-compliant-input-bucket-name>";

	// TODO 2: Set output bucket name (must be globally unique)
	public static final String OUTPUT_BUCKET_NAME = "<dns-compliant-output-bucket-name>";

	// The Amazon S3 client allows you to manage buckets and objects
	// programmatically
	public static AmazonS3 s3ClientForStudentBuckets;

	// List used to store pre-signed URLs generated
	public static List<URL> presignedUrls = new ArrayList<URL>();

	// Variables used to create JSON content
	public static final String[] ATTRS = { "genericDrugName", "adverseReaction" };
	public static final String JSON_COMMENT = "\"comment\": \"DataTransformer JSON\",";

	public static void main(String[] args) throws Exception {
		ObjectListing inputFileObjects = null;
		String fileKey = null;
		S3Object s3Object = null;
		File transformedFile = null;
		URL url = null;
		PutObjectResult response = null;

		// Create AmazonS3Client
		// The AmazonS3Client will automatically retrieve the credential profiles file
		// at the default location (~/.aws/credentials)
		s3ClientForStudentBuckets = createS3Client();

		// Set up the input bucket and copy the CSV files. Also, create the output
		// bucket.
		Utils.setup(s3ClientForStudentBuckets, INPUT_BUCKET_NAME, OUTPUT_BUCKET_NAME);

		try {
			System.out.println("DataTransformer: Starting");

			// Get summary information for all objects in the input bucket
			inputFileObjects = s3ClientForStudentBuckets.listObjects(INPUT_BUCKET_NAME);

			do {
				// Iterate over the list of object summaries
				// Get the object key from each object summary
				for (S3ObjectSummary objectSummary : inputFileObjects.getObjectSummaries()) {
					fileKey = objectSummary.getKey();
					System.out.println("DataTransformer: Transforming file: " + fileKey);

					if (fileKey.endsWith(".txt")) {
						// Retrieve the object with the specified key from the input bucket
						s3Object = getObject(s3ClientForStudentBuckets, INPUT_BUCKET_NAME, fileKey);

						// Convert the file from CSV to JSON format
						transformedFile = transformText(s3Object);

						// TODO 7: Switch to enhanced file upload
						putObjectBasic(OUTPUT_BUCKET_NAME, fileKey, transformedFile);
						// response = putObjectEnhanced(OUTPUT_BUCKET_NAME, fileKey, transformedFile);

						if (response != null) {
							System.out.println("Encryption algorithm: " + response.getSSEAlgorithm());
							System.out.println("User metadata: " + s3ClientForStudentBuckets
									.getObjectMetadata(OUTPUT_BUCKET_NAME, fileKey).getUserMetadata());
						}

						// Generate a pre-signed URL for the JSON file
						url = generatePresignedUrl(OUTPUT_BUCKET_NAME, fileKey);

						if (url != null) {
							presignedUrls.add(url);
						}
					}
				}
				inputFileObjects = s3ClientForStudentBuckets.listNextBatchOfObjects(inputFileObjects);
			} while (inputFileObjects.isTruncated());

			printPresignedUrls();
			System.out.println("DataTransformer: DONE");
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

	// Read the input stream of the S3 object. Transform the content to JSON format
	// Return the transformed text in a File object
	private static File transformText(S3Object s3Object) throws IOException {
		File transformedFile = new File("transformedfile.txt");
		String inputLine = null;
		StringBuffer outputStrBuf = new StringBuffer(1024);
		outputStrBuf.append("[\n");

		try {
			Scanner s = new Scanner(s3Object.getObjectContent());
			FileOutputStream fos = new FileOutputStream(transformedFile);
			s.useDelimiter("\n");
			while (s.hasNextLine()) {
				inputLine = s.nextLine();
				outputStrBuf.append(transformLineToJson(inputLine));
			}
			// Remove trailing comma at the end of the content. Close the array.
			outputStrBuf.deleteCharAt(outputStrBuf.length() - 2);
			outputStrBuf.append("]\n");
			fos.write(outputStrBuf.toString().getBytes());
			fos.flush();
			fos.close();
			s.close();

		} catch (IOException e) {
			System.out.println("DataTransformer: Unable to create transformed file");
			e.printStackTrace();
		}

		return transformedFile;
	}

	private static String transformLineToJson(String inputLine) {
		String[] inputLineParts = inputLine.split(",");
		int len = inputLineParts.length;

		String jsonAttrText = "{\n  " + JSON_COMMENT + "\n";
		for (int i = 0; i < len; i++) {
			jsonAttrText = jsonAttrText + "  \"" + ATTRS[i] + "\"" + ":" + "\"" + inputLineParts[i] + "\"";
			if (i != len - 1) {
				jsonAttrText = jsonAttrText + ",\n";
			} else {
				jsonAttrText = jsonAttrText + "\n";
			}
		}
		jsonAttrText = jsonAttrText + "},\n";
		return jsonAttrText;
	}

	private static void printPresignedUrls() {
		System.out.println("DataTransformer: Pre-signed URLs: ");
		for (URL url : presignedUrls) {
			System.out.println(url + "\n");
		}
	}

	/**
	 * Return a S3 Client
	 *
	 * @param bucketRegion
	 *            Region containing the buckets
	 * @return The S3 Client
	 */
	private static AmazonS3 createS3Client() {
		// TODO 3: Replace the solution with your own code
		return Solution.createS3Client();
	}

	/**
	 * Download a file from a S3 bucket
	 *
	 * @param s3ClientForStudentBuckets2
	 *            The S3 Client
	 * @param bucketName
	 *            Name of the S3 bucket
	 * @param fileKey
	 *            Key (path) to the file
	 * @return The file contents
	 */
	private static S3Object getObject(AmazonS3 s3ClientForStudentBuckets2, String bucketName, String fileKey) {
		// TODO 4: Replace the solution with your own code
		return Solution.getObject(s3ClientForStudentBuckets, bucketName, fileKey);
	}

	/**
	 * Upload a file to a S3 bucket
	 *
	 * @param bucketName
	 *            Name of the S3 bucket
	 * @param fileKey
	 *            Key (path) to the file
	 * @param transformedFile
	 *            Contents of the file
	 */
	private static void putObjectBasic(String bucketName, String fileKey, File transformedFile) {
		// TODO 5: Replace the solution with your own code
		Solution.putObjectBasic(s3ClientForStudentBuckets, OUTPUT_BUCKET_NAME, fileKey, transformedFile);
	}

	/**
	 * Return a presigned URL to a file
	 *
	 * @param bucketName
	 *            Name of the S3 bucket
	 * @param objectKey
	 *            Key (path) to the file
	 * @return Presigned URL
	 */
	private static URL generatePresignedUrl(String bucketName, String objectKey) {
		// TODO 6: Replace the solution with your own code
		return Solution.generatePresignedUrl(s3ClientForStudentBuckets, bucketName, objectKey);
	}

	/**
	 * Upload a file to a S3 bucket using AES 256 server-side encryption
	 *
	 * @param bucketName
	 *            Name of the S3 bucket
	 * @param fileKey
	 *            Key (path) to the file
	 * @param transformedFile
	 *            Contents of the file
	 * @return Response object for file creation
	 */
	private static PutObjectResult putObjectEnhanced(String bucketName, String fileKey, File transformedFile) {
		// TODO 8: Replace the solution with your own code
		return Solution.putObjectEnhanced(s3ClientForStudentBuckets, bucketName, fileKey, transformedFile);
	}

}
