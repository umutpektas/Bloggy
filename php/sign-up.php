<?php 
    
    $conn = mysqli_connect("localhost", "root", "", "php_project");
     
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "INSERT INTO users (email,username, password) VALUES ('$email','$username', '$password')";
        $result = mysqli_query($conn, $query);
        if($result){
             echo "<script>alert('Kayıt başarılı!')</script>";
        }else{
            echo "<script>alert('Kayıt başarısız!')</script>";
        }
    }