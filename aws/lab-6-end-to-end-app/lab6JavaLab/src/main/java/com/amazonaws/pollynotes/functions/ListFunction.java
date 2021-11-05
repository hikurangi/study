package com.amazonaws.pollynotes.functions;

import java.util.ArrayList;
import java.util.List;

import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class ListFunction implements RequestHandler<Note, List<Note>> {

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
		
		// Create the DynamoDB client and mapper
		
		
		// Create the Query Expression with the Hash/Partition Key from the note in the request

		
		// Query DynamoDB based on the Query Expression and return the results
		
		
		// Return a List of Note (currently returning an empty list)
		return new ArrayList<Note>();
	}
}
