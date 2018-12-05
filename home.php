<?php include 'db.php' ?>
<?php
function update(){
	if(isset($_REQUEST["update"]) && !is_nan($_REQUEST["update"])){
		//"<script>console.log('true');</script>";
		return true;								
	}else{
		//echo "<script>console.log('false;');</script>";
		return false;
	}
}

?>

<?php
function search(){
	if(isset($_REQUEST["search"]) || !is_nan($_REQUEST["search"])){
		//"<script>console.log('true');</script>";
		return true;								
	}else{
		//echo "<script>console.log('false;');</script>";
		return false;
	}
}

?>


<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" type="text/css" href="CSS/home_style.css">


	


</head>


<div class="main-wrapper"">

		<div class="header">

				<div class="Search">
				<form action="<?php echo $_SERVER['PHP_SELF']?>" method="POST">
				<div>
				
				<input type="text" placeholder=" Search name" class="form-control" required="Please fill out this field" name="search">
			
				<button type="submit" name="searchbtn">Search</button>
			
				
			
           		
				</form>	



				</div>
				</div>

			<div class="content">
				<?php
	
					 

	 		
	  //	$sql="SELECT * FROM products WHERE prod_id=''.$_REQUEST["update"].'' like '%search%' OR prod_name LIKE '%search%'";

	 
	//$sql = mysql_query("SELECT * FROM products WHERE prod_id=".$_REQUEST['search']" LIKE '%search%' OR prod_name Like '%search%'");
	
				
			if (update()){

				$query = "SELECT * FROM grandparent WHERE prod_id='".$_REQUEST["update"]."'";
				$result = mysqli_query($conn,$query);

				while ($row = mysqli_fetch_array($result)) {

					?>

				<form action="update.php" method="POST" enctype="multipart/form-data">
					
					ID Number:<input type="text" name="prod_id"  value="<?php echo $_REQUEST['update']; ?>"><br>
					
				
					
				
					
			
					Name:<input type="text" name="name"  placeholder=" Item name: " class="form-control" required="Please fill out this field" value="<?php echo $row['name']; ?>"><br>
				
				
					Price<input type="text" name="fee"  placeholder="Talent Fee: " class="form-control" required="Please fill out this field" value="<?php echo $row['fee']; ?>"><br>
					<textarea name="description"  placeholder="Description" class="form-control" required="Please fill out this field"><?php echo $row['description']; ?></textarea><br>
				
			
					Type:<select class="products" name="gender">
						<option <?php if($row["gender"]=="Male") echo "selected"; ?> value="Male">Male</option>
						<option <?php if($row["gender"]=="Female") echo "selected"; ?> value="Female">Female</option>
					</select><br>
				
				
					Talent:<select class="products" name="talent">
						<option  value="" disabled="disabled" selected="1">Categories</option>
						<option <?php if($row["talent"]=="Sing") echo "selected"; ?> value="Sing">Sing</option>
						<option <?php if($row["talent"]=="Dance") echo "selected"; ?> value="Dance">Dance</option>
						<option <?php if($row["talent"]=="Prankster") echo "selected"; ?> value="Prankster">Prankster</option>
						<option <?php if($row["talent"]=="Cook") echo "selected"; ?> value="Cook">Cook</option>
						<option <?php if($row["talent"]=="Actor") echo "selected"; ?> value="Actor">Actor</option>
						
					</select><br>
			
						<input type="file" name="update_image" value="<?php=$row['image']; ?>"><br>

						<button type="submit" id="addbtn" name="update" value="add">Update</button>
						<button id="addbtn"> <a style="text-decoration:none;color:white;padding-top:25px"href="sales.php">Sales</a></button>
						<button id="addbtn"> <a style="text-decoration:none;color:white;"href="home.php">Home</a></button>
				</form>
					<?php
				}


				}
			
				
				else {
					?>

				<form action="add.php" method="POST" enctype="multipart/form-data">
			
				<label>	Name:<input type="text" name="name" class="form-control" required="Please fill out this field"></label><br>
				<label>	Age:<input type="text" name="age" class="form-control" required="Please fill out this field" ></label><br>
					Talent Fee:<input type="text" name="fee" class="form-control" required="Please fill out this field" placeholder=" Price: "class="form-control" required="Please fill out this field"><br>
					<textarea name="description" class="form-control" required="Need description in this field!" placeholder="Description"></textarea><br>
					
					Type:<select class="products" name="gender">
						<option  value="Female">Male</option>
						<option  value="Male">Female</option>
					</select><br>

					Talent:<select class="products" name="talent" class="form-control" required="Please fill out this field">
						<option  value="" disabled="disabled" selected="1">Categories</option>
						<option  value="Sing">Sing</option>
						<option  value="Dance">Dance</option>
						<option  value="Prankster">Prankster</option>
						<option  value="Cook">Cook</option>
						<option  value="Actor">Actor</option>
						
					</select><br>

						<input type="file" name="image"  class="form-control" required="Please fill out this field" value="Upload"><br>

						<button id="updatebtn" name="addbtn" value="add">Add</button>
					
						<button id="updatebtn"> <a href="home.php">Refresh</a></button>
						
				</form>
					<?php
				}
				?>			
			</div>

<br>
			<hr>

			<div class="item-header">
				<h2>GRANDPARENT LIST</h2>
			</div>
			<div id="items">



			<?php 
			//end elseif
			
				if (!isset($_REQUEST['searchbtn'])){

						$query = "SELECT * FROM grandparent ";
						$result = mysqli_query($conn,$query);

							while ($row = mysqli_fetch_array($result)) {

								echo "<div class='img' >";
									echo "<img src='images/".$row['image']."'>";


									echo "<div class='item_list'>";

										echo "ID no: ".$row['prod_id'];
									echo "</div>";
								
									echo "<div class='item_list'>";
										echo "Name: ".$row['name'];
									echo "</div>";

									echo "<div class='item_list'>";
										echo "Age: ".$row['age'];
									echo "</div>";

									
								
									echo "<div class='item_list'>";
										echo "Gender: ".$row['gender'];
									echo "</div>";

									echo "<div class='item_list'>";
										echo "Talent: ".$row['talent'];
									echo "</div>";
									

									echo "<div class='item_list'>";
										echo "Description: ".$row['description']."<br>";
									echo "</div>";

									echo "<div class='item_list'>";
										echo "Fee:  ".$row['fee'];
									echo "</div>";
									
									echo"<div class='item_list'>";
									$prod_id = $row["prod_id"];
									echo"
									<a id='updatebtn' style='text-decoration:none' href='del.php?prod_id=$prod_id
						'>Delete</a>
									
									</div>";

								echo "</div>";  
							}
						}
else{ 
	  		if(isset($_POST['search'])){
					$searchq=$_POST['search'];
					$searchq=preg_replace("#^0-9a-z#i","",$searchq);
					$query=mysqli_query($conn,"SELECT * FROM grandparent WHERE prod_id LIKE '%$searchq%' OR name LIKE '%$searchq%' OR age LIKE '%$searchq%' OR discription LIKE '%$searchq%' OR talent LIKE '%$searchq%' OR fee LIKE '%$searchq%'") or die ("could not search!");

						$count=mysqli_num_rows($query);
						
						if($count>0){

							while ($row = mysqli_fetch_array($query)) {

								echo "<div class='img' >";
									echo "<img src='images/".$row['image']."'>";


									echo "<div class='item_list'>";

										echo "ID no: ".$row['prod_id'];
									echo "</div>";
								
									echo "<div class='item_list'>";
										echo "Name: ".$row['name'];
									echo "</div>";

									echo "<div class='item_list'>";
										echo "Age: ".$row['age'];
									echo "</div>";

									
								
									echo "<div class='item_list'>";
										echo "Gender: ".$row['gender'];
									echo "</div>";

									echo "<div class='item_list'>";
										echo "Talent: ".$row['talent'];
									echo "</div>";
									

									echo "<div class='item_list'>";
										echo "Description: ".$row['description']."<br>";
									echo "</div>";

									echo "<div class='item_list'>";
										echo "Fee:  ".$row['fee'];
									echo "</div>";
									
									echo"<div class='item_list'>";
									$prod_id = $row["prod_id"];
									echo"
									<a id='updatebtn' style='text-decoration:none' href='del.php?prod_id=$prod_id
						'>Delete</a>
									
									</div>";

								echo "</div>";  
						}
			}
			else{
							echo "<h3>There was no search results found!</h3>";
							
						}
				}
}
			//end of if
			?>
		</div>
			</div>
</div>

</body>
</html>