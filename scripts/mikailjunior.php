<?php 
$mydata = '{
    "fullname": "Abdul hameed Mikail",
    "ID": "HNG-01357",
    "email": "opeyemi072@yahoo.com",
    "language": "PHP"
}';

$details = json_decode($mydata); 

echo 'Hello World, this is '.$details->fullname.' with HNGi7 ID '.$details->ID. ' and email '. $details->email. ' using '.$details->language.' for stage 2 task'; 
?>
