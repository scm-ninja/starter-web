<?php  include 'signin.php';

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		
body{
	margin: 0;
	padding: 0;
	background-color: #2455d3;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
 
}

#main-wrapper{
	margin: auto;
	width: 700px;
	background-color: #ffffff;
	
}

.container{
	margin-top: 150px;
}

.container input{
	display: block;
	margin: 20px;
	width: 250px;
	height: 25px;
	border:1px solid gray;
	border-radius: 3px;
}


.container form{
	padding: 50px;
	margin: auto;
	width: 300px;

}

.sub-container{
	background-color: #ffffff;
	margin: auto;
    width: auto;
	border: 7px solid black;
	
}

.button{
	margin: auto;
	width: 260px;

}

.sub-container button{
	width: 250px;
	padding: 5px;
	background-color: #0ed8c3;
	color: #ffffff;
	border:1px solid black;
	border-radius: 2px;
}

.sub-container button:hover{
	cursor: pointer;
	background-color: #0accb7;
}

.sub-container h2{
	margin: 0;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: #6d6d6d;
}

.login{
	margin: auto;
	width: 260px;
}



.errorcall{
	color: red;
}

	</style>
</head>
<body>


	<div id="main-wrapper">
		<div class="container">
			<div class="sub-container">
				<form action="" method="POST">
					<div class="login">
					<h2>Admin Panel</h2><div class="errorcall"><?php echo "$msg"; ?></div>
				</div>
					
					<input type="password" name="password" placeholder=" Password">

				<div class="button">
					<button type="submit" name="signin" value="login">Login</button>
				</div>
				</form>
			</div>
		</div>
	</div>




</body>
</html>
