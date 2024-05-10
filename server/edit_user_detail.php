<?php

include('../connection.php');

$id = $_REQUEST['id'];
$ajax_response = [];

$query = "SELECT * FROM user WHERE id = ".$id;
$result = mysqli_query($connection,$query);
$output = mysqli_fetch_assoc($result);

 if ($output){

    $ajax_response['is_success'] = true;
    $ajax_response['data'] = $output;

 }else{
    $ajax_response['is_success'] = false;
    $ajax_response['message'] = "somthing wrong";

 }
print_r(json_encode($ajax_response));
exit;
?>