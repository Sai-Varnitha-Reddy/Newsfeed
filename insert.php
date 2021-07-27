<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "know.";
$id=$_POST["id"];
$pd=$_POST["pd"];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO login (username,password)
VALUES ('$id', '$pd')";

if ($conn->query($sql) === TRUE) {
    echo "Account created!<br><a href='login1.html'/>CLick here to go to the login page";
} else {
    echo "Try Again with a different username: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>