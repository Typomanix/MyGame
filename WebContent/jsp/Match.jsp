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
<title>ScoreBoard</title>
<style>
.jumbotron {
	margin-top: 35px;
	margin-bottom: 10px;
	height:200%;
	width: 60%;
	text-align:left;
	border-radius: 10px; 
}

</style>
</head>
<%
session= request.getSession();
String uname=(String)session.getAttribute("username");
Configuration cfg = new Configuration();
cfg.configure("hibernate.cfg.xml");
SessionFactory factory = cfg.buildSessionFactory();
Session sess = factory.openSession();
Transaction tx = sess.beginTransaction();
Query query=sess.createQuery("from Player where Username=:Username");
query.setParameter("Username",uname);
Player list=(Player)query.uniqueResult();
ScoreBoard sc=list.getScoreBoard();
out.print(sc.getSc_id());
String b=request.getParameter("lessons");

%>
<body background="../imgs/400.gif"><center>
	<div class="container jumbotron" style="font-family:"Comic Sans MS", cursive, sans-serif">
		<table class="table">
		<center>
<div class="page-header panel panel-default" style="margin-top:5px" >
  <h1>ScoreBoard</h1>
</div>
</center>	
			<thead>
				<tr>
					<th scope="col">SNo.</th>
					<th scope="col">Category</th>
					<th scope="col">Current Score</th>
					<th scope="col">Date</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Simple Texts</td>
					<td><%if(b.equals("texts")){out.print(sc.getScore()); %></td>
					<td><%out.print(sc.getDate());} %></td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Simple Alphabets</td>
			<td><%if(b.equals("texts_alpha")){out.print(sc.getScore()); %></td>
					<td><%out.print(sc.getDate());} %></td>
					</tr>
				<tr>
					<th scope="row">3</th>
					<td>Sentences</td>
			<td><%if(b.equals("alpha_lessons")){out.print(sc.getScore()); %></td>
					<td><%out.print(sc.getDate());} %></td>
				</tr>
				<tr>
					<th scope="row">4</th>
					<td>Vocabulary</td>
			<td><%if(b.equals("vocab")){out.print(sc.getScore()); %></td>
					<td><%out.print(sc.getDate());} %></td>
				</tr>
				<tr>
					<th scope="row">5</th>
					<td>Books Close to You</td>
			<td><%if(b.equals("fav_nov")){out.print(sc.getScore()); %></td>
					<td><%out.print(sc.getDate());} %></td>
				</tr>
				<tr>
					<th scope="row">6</th>
					<td>Computer Science & Glossaries</td>
			<td><%if(b.equals("programming")){out.print(sc.getScore()); %></td>
					<td><%out.print(sc.getDate());} %></td>
				</tr>
				<tr>
					<th scope="row">7</th>
					<td>Facts</td>
			<td><%if(b.equals("facts")){out.print(sc.getScore()); %></td>
					<td><%out.print(sc.getDate());} %></td>
				</tr>
				<tr>
					<th scope="row">8</th>
					<td>Famous Quotes</td>
			<td><%if(b.equals("fmous")){out.print(sc.getScore()); %></td>
					<td><%out.print(sc.getDate());} %></td>
				</tr>
			</tbody>
		</table>

	</div></center>
</body>
</html>