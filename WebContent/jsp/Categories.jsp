<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
<meta hhtp-equiv="X-UA-Compatible" content="IE-Edge">
<meta name="description" content="">
<meta name="author" content="">

<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Oswald'
	rel='stylesheet' type='text/css'>
<!-- Custom styles for this template -->
<link href="../css/small-business.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<title>Categories</title>
</head>
<body background="../img/bg1.gif">
	<div class="container">
		<center>
			<img class="img-fluid rounded" src="../img/new.png" alt="">
		</center>

		<div class="col-md-12">
			<a href="../index.html"> <img class="img-fluid rounded"
				src="../img/1menu.png" alt="" width="200"></a> <a
				href="../html/about.html"><img class="img-fluid rounded"
				src="../img/2menu.png" alt="" width="200"></a> <a
				href="../html/halloffame.html"> <img class="img-fluid rounded"
				src="../img/5menu.png" alt="" width="200"></a>
			</li> <a href="Categories.jsp"><img class="img-fluid rounded"
				src="../img/3menu.png" alt="" width="200"></a> <a
				href="../html/instructions.html"> <img class="img-fluid rounded"
				src="../img/4menu.png" alt="" width="200"></a>
		</div>
	</div>
	<br>
	<br>
		<div class="jumbotron img-responsive" style="height: 800px; width: 600px; margin-left:30%">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h2 class="display-4 page-header panel panel-default" align="center">Categories</h2>
						<form action="Perform.jsp" method="post" name="caterform">
							<div class="radio">
								<input type="radio" name="lessons" value="texts" id="hem" /> <label
									for="hem"><p class="lead">Simple Texts</p></label><br> <br>
								<input type="radio" name="lessons" value="texts_alpha" id="hem1" />
								<label for="hem1">
									<p class="lead">Simple Alphabets</p>
								</label><br> <br> <input type="radio" name="lessons"
									value="alpha_lessons" id="hem2" /> <label for="hem2">
									<p class="lead">Sentences</p>
								</label><br> <br> <input type="radio" name="lessons"
									value="vocab" id="hem3" /> <label for="hem3">
									<p class="lead">Vocabulary Booster</p>
								</label><br> <br> <input type="radio" name="lessons"
									value="fav_nov" id="hem4" /> <label for="hem4">
									<p class="lead">Books close to you</p>
								</label><br> <br> <input type="radio" name="lessons"
									value="programming" id="hem5" /> <label for="hem5">
									<p class="lead">Computer Science & Glossaries</p>
								</label><br> <br> <input type="radio" name="lessons"
									value="facts" id="hem6" /> <label for="hem6">
									<p class="lead">Facts</p>
								</label><br> <br> <input type="radio" name="lessons"
									value="fmous" id="hem7" /> <label for="hem7">
									<p class="lead">Famous Quotes</p>
								</label><br> <br> <input type="submit" value="Let's Begin"
									name="submit_lesson" class="btn btn-primary btn-lg" />

							</div>
					</form>
					</div>
				</div></div></div> 
				<div class="footer text-center">
					<p class="text-muted">Typomanix &copy; 2018</p>
				</div>
				<!-- Javascript-->
				<script
					src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js">
						
					</script>
				<script src="../js/bootstrap.min.js"></script>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
					integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
					crossorigin="anonymous"></script>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
					integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
					crossorigin="anonymous"></script>
				<script
					src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				<script
					src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
				<script src="../js/bootstrap.bundle.min.js"></script>
</body>
</html>