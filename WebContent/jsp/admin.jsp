<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
 <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="stylesheet" type="text/css" href="">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	</head>
<title>LOG IN SUCCESS</title>
</head>
<body background="../img/bg1.gif">
<% 
session=request.getSession();
session.setMaxInactiveInterval(50000);

%>


	<div class="container">
		<center>
			<img class="img-fluid rounded" src="../img/new.png" alt="">
		</center>
		<div class="col-md-12">
			<a href="index.html"> <img class="img-fluid rounded"
				src="../img/1menu.png" alt="" width="200"></a> <a
				href="html/about.html"><img class="img-fluid rounded"
				src="../img/2menu.png" alt="" width="200"></a> <a
				href="html/MTypingGame.html"><img class="img-fluid rounded"
				src="../img/menu6.png" alt="" width="200"></a> <a
				href="html/instructions.html"> <img class="img-fluid rounded"
				src="../img/4menu.png" alt="" width="200"></a>
			<br>			
	<ul class="nav navbar-nav navbar-right panel panel-warning">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span>WELCOME ADMIN</a></li>
        <li><a href="logout.jsp"><span class="glyphicon glyphicon-log-in"></span>Signout</a></li>
      
      </ul>
      </div>
      	</div>
	</div>
	
	<br>
  <br>
  <div class="row">
	
	<div class="col-4">
	<center><img class="img-responsive" src="../img/system.png" width="500"
				height="400"></center>	
		</div>
	
		<center>
		<a href="../jsp/Categories.jsp"	>
		<img class="img-responsive" src="../img/play.png" width="200">
			</a>		
</center>
		


</div>
<!-- Footer -->
	<footer class="py-2 bg-dark fixed-bottom">
		<div class="container">
			<p class="m-0 text-center text-white">Copyright &copy; Typomanix
				2018</p>
		</div>
		<!-- /.container -->
	</footer>

<!-- Javascript-->
  <script src="../js/jquery-1.10.2.min.js">
    </script>
    <script src="../js/bootstrap.min.js"></script>
       <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	


</body>
</html>





