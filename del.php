<html>
<head>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

	<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

<script>
	$(document).on('click',addbtn1,function() {
var id     = $(this).data('id3');            
        $.ajax({
               
                url: "del.php",
                method:"POST"
                data: {id:prod_id},
                dataType:"text"
                success: function(data){
                       alert(data);
                }
        });
return false;
});
	</script>
</head>

<?php 


	$conn = mysqli_connect("localhost", "root", "", "grand_data");
	
	if (mysqli_connect_errno()) {
		die("Failed to connect to MySQL: ".mysqli_connect_error());
	}
	

	$prod_id=$_REQUEST["prod_id"];
	$sql="select * from grandparent";
	$query=mysqli_query($conn,$sql);
	$check=mysqli_num_rows($query);
	if($check>0)
	{
		while($row_del=mysqli_fetch_assoc($query))
		{
			$id= $row_del["prod_id"];
			$name=$row_del["name"];
			$fee= $row_del["fee"];
			$image=$row_del["image"];
			$age= $row_del["age"];
			$talent=$row_del["talent"];
			$gender= $row_del["gender"];
			$description=$row_del["description"];
		}
///////

	$sql="delete from grandparent where prod_id = '$prod_id'";
	echo mysqli_query($conn,$sql);
	
	echo "<script>window.location.href='home.php';</script>";

	}
	
?>

</html>