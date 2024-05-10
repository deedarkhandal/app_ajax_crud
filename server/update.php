<?php

include('../connection.php');
$required_field=['f_name','l_name','email','pass','phone','address'];
$error=[];
$ajax_response=[];

foreach($required_field as $key => $value){
    if (!isset($_REQUEST[$value]) || empty ($_REQUEST[$value])){
        $error[$value]=$value." is required";

    }
}
if (count($error)==0){

    $f_name=$_REQUEST['f_name'];
    $l_name=$_REQUEST['l_name'];
    $email=$_REQUEST['email'];
    $pass=$_REQUEST['pass'];
    $phone=$_REQUEST['phone'];
    $address=$_REQUEST['address'];
    $id=$_REQUEST['id'];
    $query="UPDATE user SET `f_name`='$f_name' , `l_name`='$l_name',`email`='$email', `pass`='$pass', `phone`='$phone', `address`='$address' WHERE id = ".$id;
    $result=mysqli_query($connection,$query);
}

if ($result){
    $ajax_response['is_success'] = true;
    $ajax_response['message'] = "SUCCESSFULLY UPDATE";

}else{
    $ajax_response['is_success'] = false;
    $ajax_response['message'] = $error;
}

print_r(json_encode($ajax_response));
exit;
?>