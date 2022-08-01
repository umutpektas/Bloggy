<?php 

$conn = mysqli_connect("localhost", "root", "", "php_project");

    if(isset($_POST['submit'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        $result = mysqli_query($conn, $query);
        if(mysqli_num_rows($result) > 0){
            $_SESSION['username'] = $username;
            header("Location: index.php");
        }else{
            echo "<script>alert('Kullanıcı adı veya şifre hatalı!')</script>";
        }
    }