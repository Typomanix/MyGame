<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>ADMIN</title>
</head>
<body>

<%

String username= request.getParameter("id");
String password= request.getParameter("upassword");
if(username.equals("admin") && password.equals("@dmin@12#")){
	
	RequestDispatcher rs= request.getRequestDispatcher("../jsp/admin.jsp");
		rs.forward(request,response);
		
}
else{
	%>
	
	<script>window.alert(Please write a valid Username or password);</script>
<% 
	response.sendRedirect("../html/admin.html");

}
%>
</body>
</html>