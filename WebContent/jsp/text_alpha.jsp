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
<title>ALPHABETS</title>
</head>
<body>
<%
session= request.getSession();
String uname=(String)session.getAttribute("username");
double word=Double.parseDouble(request.getParameter("start"));

 Configuration cfg = new Configuration();
 cfg.configure("hibernate.cfg.xml");

 SessionFactory factory = cfg.buildSessionFactory();
 Session sess= factory.openSession();
 Transaction tx = sess.beginTransaction();
 Query q = sess.createQuery("from Player where Username=:Username");
 q.setParameter("Username",uname);
 Player p = (Player) q.uniqueResult();
int sc_id= p.getScoreBoard().getSc_id();
 String hql = "UPDATE ScoreBoard as s set score =:score,date =:date,Categeory =:Categeory where SC_ID=:SC_ID";

 Query query = sess.createQuery(hql);
 query.setParameter("score",word);
 String b=request.getParameter("lessons");
 query.setParameter("Categeory",b);
 query.setParameter("SC_ID",sc_id);
  query.setParameter("date",new Date());
 int rowsAffected = query.executeUpdate();
 if (rowsAffected > 0) {
     out.println("Updated " + rowsAffected + " rows.");
 }
 tx.commit();
%>
</body>
</html>