package com.amazonaws.pollynotes.pojo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBRangeKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
/*
 * POJO Object with DynamoDB Mapper Annotations representing the
 *  DynamoDB table pollynotes 
 */
@DynamoDBTable(tableName="pollynotes")
public class Note {
	private String userId;
	private String noteId;
	private String note;

	@DynamoDBHashKey(attributeName="userId")
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	@DynamoDBRangeKey(attributeName="noteId")
	public String getNoteId() {
		return noteId;
	}

	public void setNoteId(String noteId) {
		this.noteId = noteId;
	}

	@DynamoDBAttribute(attributeName = "note")
	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
	public String toString() {
		return new String("userId: \"" + this.userId 
				+ "\", noteId: \"" + this.noteId 
				+ "\", note: \"" + this.note + "\"");
	}
}
