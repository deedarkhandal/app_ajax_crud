<?php
include('../connection.php');
$email = $_REQUEST['email'];
$ajax_response = [];
$query="SELECT email FROM user where email='".$email."'";
$result=mysqli_query($connection, $query);
$total_rows=mysqli_num_rows($result);
$output=[];
if ($total_rows > 0){
    $ajax_response['is_success'] = true;
    $ajax_response['message']= "email exit ";
}else{
    $ajax_response['is_success']= false;
}

print_r(json_encode($ajax_response));
exit;
?>