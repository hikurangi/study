// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using System;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.IO;
using System.Text;

namespace Lab2
{
    // The DataTransformer class transforms objects in the input S3 bucket and
    // puts the transformed objects into the output S3 bucket.
    public static class DataTransformer
    {
        public static readonly string[] Attributes = { "genericDrugName", "adverseReaction" };

        // TODO 1: Set input bucket name (must be globally unique)
        public static readonly string InputBucketName = "<globally-unique-input-bucket-name>";

        // TODO 2: Set output bucket name (must be globally unique)
        public static readonly string OutputBucketName = "<globally-unique-output-bucket-name>";

        public static readonly string JsonComment = "\"comment\": \"DataTransformer JSON\",";

        // The Amazon S3 client allows you to manage buckets and objects programmatically.
        public static AmazonS3Client s3ForStudentBuckets;

        // List used to store pre-signed URLs generated.
        public static Collection<string> preSignedUrls = new Collection<string>();

        public static void Main()
        {
            ListObjectsRequest inputFileObjects;
            string fileKey = null;
            string transformedFile = null;
            string url = null;

            Init();

            try
            {
                Debug.WriteLine("Transformer: Here we go...");
                CreateBucket(InputBucketName);
                CreateBucket(OutputBucketName);

                inputFileObjects = new ListObjectsRequest
                {
                    BucketName = InputBucketName
                };

                ListObjectsResponse listResponse;
                do
                {
                    // Get a list of objects
                    listResponse = s3ForStudentBuckets.ListObjects(inputFileObjects);
                    foreach (S3Object obj in listResponse.S3Objects)
                    {
                        fileKey = obj.Key;
                        Debug.WriteLine("Transformer: Transforming file: " + fileKey);
                        if (fileKey.EndsWith(".txt"))
                        {
                            GetObjectResponse curObject = GetS3Object(s3ForStudentBuckets, InputBucketName, fileKey);
                            transformedFile = TransformText(curObject);

                            // TODO 7: Switch to enhanced file upload
                            PutObjectBasic(OutputBucketName, fileKey, transformedFile);
                            // PutObjectEnhanced(OutputBucketName, fileKey, transformedFile);

                            url = GeneratePresignedURL(fileKey);
                            if (url != null)
                            {
                                preSignedUrls.Add(url);
                            }
                        }
                    }

                    // Set the marker property
                    inputFileObjects.Marker = listResponse.NextMarker;
                } while (listResponse.IsTruncated);

                PrintPresignedUrls();
                Debug.WriteLine("Transformer: DONE");
            }
            catch (AmazonServiceException ase)
            {
                Debug.WriteLine("Error Message:    " + ase.Message);
                Debug.WriteLine("HTTP Status Code: " + ase.StatusCode);
                Debug.WriteLine("AWS Error Code:   " + ase.ErrorCode);
                Debug.WriteLine("Error Type:       " + ase.ErrorType);
                Debug.WriteLine("Request ID:       " + ase.RequestId);
            }
            catch (AmazonClientException ace)
            {
                Debug.WriteLine("Error Message: " + ace.Message);
            }
        }

        private static void PrintPresignedUrls()
        {
            Debug.WriteLine("Transformer: Pre-signed URLs: ");
            foreach (string url in preSignedUrls)
            {
                Debug.WriteLine(url + "\n");
            }
        }

        // Create the output bucket if it does not exist already.
        public static void CreateBucket(string bucket)
        {
            ListBucketsResponse responseBuckets = s3ForStudentBuckets.ListBuckets();
            bool found = false;

            foreach (S3Bucket s3Bucket in responseBuckets.Buckets)
            {
                if (s3Bucket.BucketName == bucket)
                {
                    found = true;
                    VerifyBucketOwnership(bucket);
                    break;
                }
                else
                {
                    found = false;
                }
            }

            if (found == false)
            {
                Debug.Write("Transformer: Creating bucket: " + bucket);
                PutBucketRequest request = new PutBucketRequest();
                request.BucketName = bucket;
                s3ForStudentBuckets.PutBucket(request);
            }
        }

        // Verify that this AWS account is the owner of the bucket.
        public static void VerifyBucketOwnership(string bucketName)
        {
            bool ownedByYou = false;
            ListBucketsResponse responseBuckets = s3ForStudentBuckets.ListBuckets();

            foreach (S3Bucket bucket in responseBuckets.Buckets)
            {
                if (bucket.BucketName.Equals(bucketName))
                {
                    ownedByYou = true;
                }
            }

            if (!ownedByYou)
            {
                Debug.WriteLine(String.Format("The {0} bucket is owned by another account. Specify a unique name for your bucket. ", bucketName));
            }
        }

        private static void Init()
        {
            s3ForStudentBuckets = CreateS3Client();
            Utils.Setup(s3ForStudentBuckets);
        }

        // Reads the input stream of the S3 object. Transforms content to JSON format.
        // Return the transformed text in a File object.
        private static string TransformText(GetObjectResponse response)
        {
            string transformedText = null;
            StringBuilder sbJSON = new StringBuilder();
            string line;

            try
            {
                // Transform to JSON then write to file
                StreamReader reader = new StreamReader(response.ResponseStream);
                while((line = reader.ReadLine()) != null)
                {
                    sbJSON.Append(TransformLineToJson(line));
                }
                reader.Close();
            }
            catch (IOException ex)
            {
                Debug.WriteLine("Transformer: Unable to create transformed file");
                Debug.WriteLine(ex.Message);
            }

            transformedText = sbJSON.ToString();
            return transformedText;
        }

        private static string TransformLineToJson(string inputLine)
        {
            string[] inputLineParts = inputLine.Split(',');
            int len = inputLineParts.Length;

            string jsonAttrText = "{\n  " + JsonComment + "\n";
            for (int i = 0; i < len; i++)
            {
                jsonAttrText = jsonAttrText + "  \"" + Attributes[i] + "\"" + ":" + "\"" + inputLineParts[i] + "\"";
                if (i != len - 1)
                {
                    jsonAttrText = jsonAttrText + ",\n";
                }
                else
                {
                    jsonAttrText = jsonAttrText + "\n";
                }
            }
            jsonAttrText = jsonAttrText + "},\n";
            return jsonAttrText;
        }

        /**
         * Create an instance of the AmazonS3Client object
         *
         * @return      The S3 Client
         */
        private static AmazonS3Client CreateS3Client()
        {
            // TODO 3: Replace the solution with your own code
            return Solution.CreateS3Client();
        }

        /**
         * Retrieve each object from the input S3 bucket
         *
         * @param s3Client      The S3 Client
         * @param bucketName    Name of the S3 bucket
         * @param fileKey       Key (path) to the file
         * @return              The file contents
         */
        private static GetObjectResponse GetS3Object(AmazonS3Client s3Client, string bucketName, string fileKey)
        {
            // TODO 4: Replace the solution with your own code
            return Solution.GetS3Object(s3Client, bucketName, fileKey);
        }

        /**
         * Upload object to output bucket
         *
         * @param bucketName          Name of the S3 bucket
         * @param fileKey             Key (path) to the file
         * @param transformedFile     Contents of the file
         */
        private static void PutObjectBasic(string bucketName, string fileKey, string transformedFile)
        {
            // TODO 5: Replace the solution with your own code
            Solution.PutObjectBasic(s3ForStudentBuckets, bucketName, fileKey, transformedFile);
        }

        /**
         * Generate a pre-signed URL to retrieve object
         *
         * @param objectKey     Key (path) to the file
         * @return              Presigned URL
         */
        private static string GeneratePresignedURL(string objectKey)
        {
            // TODO 6: Replace the solution with your own code
            return Solution.GeneratePresignedURL(s3ForStudentBuckets, OutputBucketName, objectKey);
        }

        /**
         * Upload a file to a S3 bucket using AES 256 server-side encryption
         *
         * @param bucketName          Name of the S3 bucket
         * @param fileKey             Key (path) to the file
         * @param transformedFile     Contents of the file
         */
        private static void PutObjectEnhanced(string bucketName, string fileKey, string transformedFile)
        {
            // TODO 8: Replace the solution with your own code
            Solution.PutObjectEnhanced(s3ForStudentBuckets, bucketName, fileKey, transformedFile);
        }
    }
}
