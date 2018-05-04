package com.niit.typomanix;

public class Player {
	String Username;
	String firstname;  
	String lastname;
	String email,password;
	ScoreBoard scoreboard;
	public Player() {
		super();
	}
	

	public Player(String username, String firstname, String lastname, String email, String password,
			ScoreBoard scoreboard) {
		super();
		Username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.scoreboard = scoreboard;
	}
	public Player(String username, String firstname, String lastname, String email, String password) {
		super();
		Username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}


	public ScoreBoard getScoreBoard() {
		return scoreboard;
	}


	public void setScoreBoard(ScoreBoard scoreboard) {
		this.scoreboard = scoreboard;
	}
	
	}
