package com.niit.typomanix;

import java.util.Date;

public class ScoreBoard {
	int sc_id;
	String Categeory;
	Double score ;
	java.util.Date date;
	public ScoreBoard(){
		
	}
	
	public ScoreBoard(String categeory, Double score, Date date) {
		super();
		Categeory = categeory;
		this.score = score;
		this.date = date;
	}

	public String getCategeory() {
		return Categeory;
	}

	public void setCategeory(String categeory) {
		Categeory = categeory;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
	public java.util.Date getDate() {
		return date;
	}

	public void setDate(java.util.Date date) {
		this.date = date;
	}

	public int getSc_id() {
		return sc_id;
	}

	public void setSc_id(int sc_id) {
		this.sc_id = sc_id;
	}
	
		}
