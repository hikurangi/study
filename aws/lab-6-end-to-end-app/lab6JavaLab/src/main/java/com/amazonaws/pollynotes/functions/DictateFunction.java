package com.amazonaws.pollynotes.functions;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.StandardCopyOption;

import com.amazonaws.pollynotes.pojo.DictateRequest;
import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.polly.AmazonPolly;
import com.amazonaws.services.polly.AmazonPollyClient;
import com.amazonaws.services.polly.model.OutputFormat;
import com.amazonaws.services.polly.model.SynthesizeSpeechRequest;
import com.amazonaws.services.polly.model.SynthesizeSpeechResult;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GeneratePresignedUrlRequest;

public class DictateFunction implements RequestHandler<DictateRequest, String> {

	/**
	 * PollyNotes-DictateFunction
     * 
     * This lambda function is integrated with the following API methods:
     * /notes/{id}/POST
     * 
     * This function does the following:
     * 1. Takes a JSON payload from API gateway and converts it into a DictateRequest {@link com.amazonaws.pollynotes.pojo.DictateRequest}
     * 2. Queries DynamoDB for the note from the request to fetch the note text
     * 3. Calls the Polly synthensize_speech API to convert text to speech
     * 4. Stores the resulting audio in an MP3 file
     * 5. Uploads the MP3 file to S3
     * 6. Creates a pre-signed URL for the MP3 file
     * 7. Returns the pre-signed URL to API Gateway
     * 
     * @param	request	POJO of DictateRequest created from the JSON sent from API GW into Lambda
     * @param	context	Lambda context which can be used for logging
     * @return			pre-signed URL for the MP3 file generated from the note
	 */
	@Override
	public String handleRequest(DictateRequest request, Context context) {
		// The note object contains the voiceId, userId and noteId from the /notes/{id}/POST
        // {
        //   "voiceId": "...",
        //     "note": {
        //       "userId": "...",
        //       "noteId": "..."
        //     }
        // }
		
		context.getLogger().log("Initiating PollyNotes-DictateFunction...");
		context.getLogger().log("DictateRequest received: {" + request.toString() + "}");
		
		// Get the MP3 bucket name from env variable MP3_BUCKET_NAME in Lambda or from the MP3_BUCKET_NAME variable
		String bucketName = System.getenv("MP3_BUCKET_NAME");
		context.getLogger().log("MP3 Bucket Name from Environment Variable MP3_BUCKET_NAME: \"" + bucketName + "\"");
		
		// Create the DynamoDB client and mapper
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();
		DynamoDBMapper mapper = new DynamoDBMapper(client);
		
		// Get the note object based on the request
		Note note = mapper.load(request.getNote());
		context.getLogger().log("Note found from DynamoDB: {" + note.toString() + "}");

		// Create the Polly client
		AmazonPolly polly = AmazonPollyClient.builder().build();

		// Invoke Polly's SynthesizeSpeechRequest, which will transform text into audio
		SynthesizeSpeechRequest synthReq = new SynthesizeSpeechRequest()
				.withText(note.getNote())
				.withVoiceId(request.getVoiceId())
				.withOutputFormat(OutputFormat.Mp3);
		SynthesizeSpeechResult synthRes = polly.synthesizeSpeech(synthReq);
		context.getLogger().log("Successfully synthesized the Note text");
		
		// Get the resulting AudioStream
		InputStream in = synthRes.getAudioStream();
		
		// Save the audio stream returned by Amazon Polly to Lambda's /tmp directory to be uploaded
		File file = new File(File.separator + "tmp" + File.separator + note.getNoteId());
		try {
			java.nio.file.Files.copy(in, file.toPath(), StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			// Log the error
			context.getLogger().log("Error in saving the Polly AudioStream to " + file.toString() + ":" + e.getMessage());
			// Return empty string as error
			return "";
		}
		context.getLogger().log("Successfully saved the Polly AudioStream to " + file.toString());
		
		// Create the ObjectKey from the UserId and NoteId for uniqueness in the MP3 bucket
		String mp3ObjectKey = note.getUserId() + "/" + note.getNoteId() + ".mp3";
		
		// Create the S3 Client
		AmazonS3 s3 = AmazonS3ClientBuilder.standard().build();
		
		// Upload the MP3 File to S3
		s3.putObject(bucketName, mp3ObjectKey, file);
		context.getLogger().log("Successfully uploaded the MP3 file to S3");		
		
		// Generate a pre-signed URL to access the MP3 file securely
		GeneratePresignedUrlRequest generatePresignedUrlRequest = new GeneratePresignedUrlRequest(
				bucketName, mp3ObjectKey);
		String url = s3.generatePresignedUrl(generatePresignedUrlRequest).toString();
		context.getLogger().log("Successfully generated a pre-signed URL for the MP3 file: " + url);
		
		// Return the pre-signed URL of the MP3 file
		return url;
	}
}