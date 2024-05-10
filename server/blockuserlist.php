<?php

include('../connection.php');
$ajax_response = [];
$value = 0;

$query = "SELECT * FROM user WHERE is_active =".$value;
$result = mysqli_query($connection,$query);
$total_rows = mysqli_num_rows($result);
$output=[];

if ($total_rows > 0){
    while($rows = mysqli_fetch_assoc($result)){
        $output[] = $rows;
    }
}
    $ajax_response['total_rows']=$total_rows;
    $ajax_response['is_success'] = true;
    $ajax_response['data'] = $output;


print_r(json_encode($ajax_response));
exit;
?>