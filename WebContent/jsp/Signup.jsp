<%@page import="java.util.Date"%>
<%@page import="com.niit.typomanix.SaveObjectPlayer"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import = "java.sql.*" import="com.niit.typomanix.*"%>
     <%@	page import="org.hibernate.*,
    org.hibernate.cfg.Configuration,
    java.util.*,com.niit.typomanix.*"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Registration</title>
</head>
<body>

 <jsp:useBean id="player" class="com.niit.typomanix.Player">
 
 
 </jsp:useBean>
 <jsp:setProperty property="*" name="player" />
 <jsp:useBean id="scoreboard" class="com.niit.typomanix.ScoreBoard"></jsp:useBean>
 <jsp:setProperty property="*" name="scoreboard"/>
<%
	session= request.getSession();
	String username = request.getParameter("uid");
  String fname = request.getParameter("fname");
	String lname = request.getParameter("lname");
	String email = request.getParameter("email");
  String pwd = request.getParameter("upassword");
	ScoreBoard sc= new ScoreBoard();
	boolean j=SaveObjectScore.register(sc);
	Player player1= new Player(username,fname,lname,email,pwd,sc);
	boolean i = SaveObjectPlayer.register(player1);
 
	if (i == true){
		out.print("You are successfully registered");
		int scid= sc.getSc_id();
		session.setAttribute("username",username);
		session.setAttribute("sc_id",scid);
	
%>	
<jsp:forward page="../jsp/Session.jsp"></jsp:forward>
<% 
}
  
  else{
	out.print("username is already exists. Please enter another username");
%>
<jsp:include page="../html/signup.html"></jsp:include>
<%
}%>
</body>
</html>