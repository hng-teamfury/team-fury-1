<?php
function message($fullname, $email, $ID, $language){
    $output =  "Hello World, this is $fullname with HNGi7 ID $ID and email $email using $language for stage 2 task";
    return $output;
}

$fullname = "Olaniyi Oshunbote";
$ID = "HNG-06784";
$email = "oshunboteo@gmail.com";
$language = "PHP";
echo message($fullname, $email, $ID, $language);
