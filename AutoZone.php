<?php 


$servername = "localhost"; 


$username = "root"; 


$password = ""; 

/
$conn = new mysqli($servername, 
			$username, $password); 


if ($conn->connect_error) { 
	die("Connection failure: "
		. $conn->connect_error); 
} 


$sql = "CREATE DATABASE AutoZone"; 
if ($conn->query($sql) === TRUE) { 
	echo "Database with name AutoZone"; 
} else { 
	echo "Error: " . $conn->error; 
} 


$conn->close(); 
?> 
