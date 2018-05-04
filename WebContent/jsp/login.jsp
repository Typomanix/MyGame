<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"
       import ="org.hibernate.Query,
                org.hibernate.Session,
                org.hibernate.SessionFactory,
                org.hibernate.Transaction,
               org.hibernate.cfg.Configuration,
            java.util.*,com.niit.typomanix.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>LOG IN </title>
</head>
<body>
<% 
String username =request.getParameter("id").toString();
String pwd =request.getParameter("upassword").toString();

Configuration cfg = new Configuration();
cfg.configure("hibernate.cfg.xml");

SessionFactory factory = cfg.buildSessionFactory();
Session sess= factory.openSession();
List<Player> list = (List<Player>)sess.createQuery("FROM Player").list();
int count=0;
for(Player play:list){
	if(username.equals(play.getUsername()) && pwd.equals(play.getPassword())){
	out.print(" Successful ");
	ScoreBoard sc= new ScoreBoard();
	int scid= sc.getSc_id();
	session= request.getSession();
	session.setAttribute("username", username);
	session.setAttribute("scid",scid);
	count++;
	break;
	
	}
}

	
if(count>0) 
{
	%>
	<jsp:forward page="Session.jsp"></jsp:forward>
	 
<% }
	else {
		
		%>
		<script>
		alert("username or password are not matched.");
		</script>
		<jsp:include page="../html/login.html"></jsp:include>
	<% }


//t.commit();
sess.close();


%>
</body>
</html>