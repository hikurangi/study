package com.amazonaws.pollynotes.solution;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class SearchFunctionSolution implements RequestHandler<Note, List<Note>> {

	/**
	 * PollyNotes-SearchFunction
	 * 
     * This lambda function is integrated with the following API methods:
     * /notes/search/GET
     * 
     * This function does the following:
     * 1. Takes a JSON payload from API gateway and converts it into a Note POJO {@link com.amazonaws.pollynotes.pojo.Note}
     * 2. Queries DynamoDB using the QueryAsync feature. It will use the userId for the Partition Key, but a Filter will need
     *    to be applied to do the search based on the note text.
     * 3. Returns the List of Note found
     *  
     * @param	note 	POJO of Note created from the JSON sent from API GW into Lambda
     * @param	context	Lambda context which can be used for logging
     * @return			A List of Note containing all of the items for the userId containing the note  text in DynamoDB
	 */
	@Override
	public List<Note> handleRequest(Note note, Context context) {
		// The note object contains the userId and a partial note sent from API GW in the /notes/search/GET
        // {
        //   "userId": "...",
        //   "note": "..."
        // }

		context.getLogger().log("Initiating PollyNotes-SearchFunction...");
		context.getLogger().log("Note received: {" + note.toString() + "}");
		
		// Create the DynamoDB client and mapper
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();
		DynamoDBMapper mapper = new DynamoDBMapper(client);
		
		// Create the Expression Attribute Value HashMap for the value of the note text to search
		//  sent in the note in the request
		Map<String, AttributeValue> expressionAttributeValues = new HashMap<String, AttributeValue>();
		expressionAttributeValues.put(":v_note", new AttributeValue().withS(note.getNote()));
		
		// Create the Query Expression with the Hash/Partition Key set to the one set in the note in the request
		//  and with the filter expression set to the value of the note sent in the request
		DynamoDBQueryExpression<Note> queryExpression = new DynamoDBQueryExpression<Note>()
				.withHashKeyValues(note)
				.withFilterExpression("contains (note, :v_note)")
					.withExpressionAttributeValues(expressionAttributeValues);
		
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
