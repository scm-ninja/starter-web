<?php
	
	include 'config.php';

	$host = $conf['host'];
	$hostname = $conf['hostname'];
	$password = $conf['password'];
	$db_name = $conf['db_name'];

	$conn = mysqli_connect($host,$hostname,$password,$db_name);

	if (!$conn) {
		die("Connection failed: ".mysqli_conect_error());
	}

	

		//echo "Connected Successfully";

