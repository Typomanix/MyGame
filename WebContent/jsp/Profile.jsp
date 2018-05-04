<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	     <%@page import="com.niit.typomanix.ScoreBoard"%>
 <%@ page import="org.hibernate.*,
   org.hibernate.cfg.Configuration,
   java.util.*,
   com.niit.typomanix.Player" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta hhtp-equiv="X-UA-Compatible" content="IE-Edge">

<link rel="stylesheet" type="text/css" href="">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<title>My Profile</title>
<style>
.jumbotron {

	margin-top: 150px;
	margin-bottom: 25px;
	height:100%;
	width: 60%;
	text-align:left;
	border-radius: 10px; 
	font-family:Times New Roman;
}

</style>
</head>
<% 

session= request.getSession();
//String uname=(String)session.getAttribute("username");
Configuration cfg = new Configuration();
cfg.configure("hibernate.cfg.xml");
SessionFactory factory = cfg.buildSessionFactory();
Session sess = factory.openSession();
Transaction tx = sess.beginTransaction();
Query query=sess.createQuery("from Player where Username=:Username");
query.setParameter("Username","hemant");
Player list=(Player)query.uniqueResult();
//ScoreBoard sc=list.getScoreBoard();
%>
<body background="../imgs/back1.gif">
	
		<center>
			<div class="jumbotron">
				<div class="page-header panel panel-default" style="margin-top:5px" >
					<h1>
					&nbsp;My Profile
						
					</h1>
					</div>
				<img src="../imgs/icon.png" align="right" height="200px">
				<br>
				<h3>
					<%
						out.print(" &nbsp;&nbsp;  Name :&nbsp;&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp &nbsp;&nbsp; " + list.getFirstname() + " "
								+ list.getLastname());
					%>
				</h3>
				<h3>
					<%
						out.print(" &nbsp;&nbsp;  UserName :  &nbsp;&nbsp; " + list.getUsername());
					%>
				</h3>
				<h3>
					<%
						out.print(" &nbsp;&nbsp; E-Mail : &nbsp&nbsp;&nbsp &nbsp;&nbsp; " + list.getEmail());
					%>
				</h3>
			</div>
			</center>

</body>
</html>