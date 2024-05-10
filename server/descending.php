<?php
include('../connection.php');
$id_asc=$_REQUEST['id'];
$id_des=$_REQUEST['id'];

    if($id_asc == "asc"){
    $query="SELECT * FROM user ORDER BY id ASC ";
    $result=mysqli_query($connection,$query);
    $total_rows = mysqli_num_rows($result);
    $output=[];
    if ($total_rows > 0){
    while($rows=mysqli_fetch_assoc($result)){
        $output[]=$rows;
      }
    }
}else{
    if($id_des == "des"){
        $query="SELECT * FROM user ORDER BY id DESC ";
        $result=mysqli_query($connection,$query);
        $total_rows = mysqli_num_rows($result);
        $output=[];
        if ($total_rows > 0){
        while($rows=mysqli_fetch_assoc($result)){
            $output[]=$rows;
          }
        }
}
}

if($output){
    $ajax_response['is_success']=true;
    $ajax_response['data']=$output;
}else{

    $ajax_response['is_success']=false;
    $ajax_response['message']="something wrong ";
}

print_r(json_encode($ajax_response));
exit;

?>
    

 
