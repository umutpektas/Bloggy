<?php

$conn = mysqli_connect("localhost", "root", "", "php_project");

    if(isset($_POST['submit'])){
        $title = $_POST['title'];
        $body = $_POST['body'];
        $query = "INSERT INTO blogs (title,body) VALUES ('$title','$body')";
        $result = mysqli_query($conn, $query);
        if($result){
            echo "<script>alert('Kayıt başarılı!')</script>";
        }else{
            echo "<script>alert('Kayıt başarısız!')</script>";
        }
    }