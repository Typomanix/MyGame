<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>LOG OUT</title>
</head>
<body>
<% 
session= request.getSession();
String username = (String)session.getAttribute("username");
int active=session.getMaxInactiveInterval();

if(username!=null || active!=3600)
{
    out.print("logged in as:" + username);
   
    }
response.sendRedirect("../index.html");
%>

</body>
</html>