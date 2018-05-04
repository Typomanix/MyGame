<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Play Game</title>
</head>
<body>
<%
        String b=request.getParameter("lessons");
        switch(b){
        case "texts":
        				response.sendRedirect("../html/text.html");
        				break;
        case "texts_alpha": 
        				response.sendRedirect("../html/text_alpha.html");
        				break;
        case "alpha_lessons":
        				response.sendRedirect("../html/alpha_lesson.html");
        				break;
        case "vocab":
        				response.sendRedirect("../html/vocab.html");
        				break;
        case "fav_nov":
						response.sendRedirect("../html/fav_nov.html");
						break;
        case "programming":
						response.sendRedirect("../html/programming.html");
						break;
        case "facts":
						response.sendRedirect("../html/facts.html");
						break;
        case "fmous":
						response.sendRedirect("../html/fmous.html");
						break;
 				
        }
        %>
</body>
</html>