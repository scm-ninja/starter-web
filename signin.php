<?php 
	$msg = "";
	$pass="username";

	
		if (isset($_POST['signin']) == 'login') {
			$password = $_POST['password'];
		
			if($password==$pass){
		
			
				header('location: home.php?home=Success_login');
			}
		
			if($password!=$pass){
				$msg = "Password Does not Match!";
				

			}

		}



