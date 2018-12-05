<?php

	include_once 'db.php';
	$msg = "";
	$errorFlag = 0;


	$strAction = $_POST['action2'];
	
	if (isset($_POST['addbtn']) == 'add') {
		
		$name = $_POST['name'];
		$age = $_POST['age'];
		$fee = $_POST['fee'];
		$description = $_POST['description'];
		$gender = $_POST['gender'];
		$talent = $_POST['talent'];
		$target = "images/".basename($_FILES['image']['name']);
		$image = $_FILES['image']['name'];

		
		$sql = "INSERT INTO grandparent(name, gender, fee, description, image,talent,age) VALUES('$name','$gender','$fee','$description','$image','$talent','$age');";
		
		if (mysqli_query($conn,$sql)) {
			echo "Success!";
					
				$sql = "INSERT INTO categories(talent) VALUES('$talent'); ";
				mysqli_query($conn,$sql);

				if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
						header("Location: home.php");
				}

				else{
					$msg = "Theres a problem inserting data";
					echo $msg;
				}
		}

		


	mysqli_close($conn);



	}


?>



