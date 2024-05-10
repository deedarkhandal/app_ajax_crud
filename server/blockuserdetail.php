<?php

include( '../connection.php' );
$id = $_REQUEST[ 'id' ];

$ajax_response = [];

$value = 0;

$query = "UPDATE user set is_active=$value where id =".$id;
$result = mysqli_query( $connection, $query );

if ( $result ) {

    $ajax_response[ 'is_success' ] = true;
    $ajax_response[ 'message' ] = ' USER BLOCKED';
} else {

    $ajax_response[ 'is_success' ] = false;
    $ajax_response[ 'message' ] = 'SOMTHING WENT WRONG ';
}

print_r( json_encode( $ajax_response ) );
exit;

?>