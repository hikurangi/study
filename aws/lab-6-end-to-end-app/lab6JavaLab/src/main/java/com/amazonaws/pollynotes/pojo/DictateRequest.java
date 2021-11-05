package com.amazonaws.pollynotes.pojo;

/*
 * POJO Object for the request sent for the DictateFunction
 * 
 * It maps to the following JSON code:
 * 	{
 * 		"voiceId": "Russell",
 * 		"note": {
 * 			"userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
 * 			"noteId": "001"
 * 		}
 * 	}
 */
public class DictateRequest {
	private Note note;
	private String voiceId;

	public Note getNote() {
		return note;
	}

	public void setNote(Note note) {
		this.note = note;
	}

	public String getVoiceId() {
		return voiceId;
	}

	public void setVoiceId(String voiceId) {
		this.voiceId = voiceId;
	}
	
	public String toString() {
		return new String("voiceId: \"" + this.voiceId 
				+ "\", note: {" + this.note.toString()) + "}";
	}
}
