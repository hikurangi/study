package com.amazonaws.pollynotes.solution;

import java.util.ArrayList;
import java.util.List;

import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class ListFunctionSolution implements RequestHandler<Note, List<Note>> {

	/**
	 * PollyNotes-ListFunction
	 * 
     * This lambda function is integrated with the following API methods:
     * /notes/GET
     *   
     * This function does the following:
     * 1. Takes a JSON payload from API gateway and converts it into a Note POJO {@link com.amazonaws.pollynotes.pojo.Note}
     * 2. Queries DynamoDB based on that payload using the QueryAsync feature
     * 3. Returns the List of Note found
     *  
     * @param	note 	POJO of Note created from the JSON sent from API GW into Lambda
     * @param	context	Lambda context which can be used for logging
     * @return			A List of Note containing all of the elements for the userId in DynamoDB
	 */
	@Override
	public List<Note> handleRequest(Note note, Context context) {
		// The note object only contains the userId as it's the only parameter sent in the /notes/GET
        // {
        //   "userId": "..."
        // }

		context.getLogger().log("Initiating PollyNotes-ListFunction...");
		context.getLogger().log("Note received: {" + note.toString() + "}");
		
		// Create the DynamoDB client and mapper
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();
		DynamoDBMapper mapper = new DynamoDBMapper(client);
		
		// Create the Query Expression with the Hash/Partition Key from the note in the request
		DynamoDBQueryExpression<Note> queryExpression = new DynamoDBQueryExpression<Note>().withHashKeyValues(note);
		
		try {
			// Query DynamoDB based on the Query Expression and return the results
			List<Note> noteList = mapper.query(Note.class, queryExpression);
			
			// Log the Note(s) found
			for (Note n : noteList) {
				context.getLogger().log("Note found in DynamoDB: {" + n.toString() + "}");
			}
			
			// Return the results
			return noteList;
		} catch (Exception e) {
			// Error found, log the message
			context.getLogger().log("Exception found, returning empty list. Error: " + e.getMessage());
			
			// Return an empty list
			return new ArrayList<Note>();
		}
	}
}
