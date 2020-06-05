<?php

$fullname = "Olayioye Saheed Olajide";
$hng_id = "HNG-01481";
$email = "olajide99@gmail.com";
$language = "PHP";
$stage = "stage 2";

function show($fullname, $email, $hng_id, $language, $stage){

    $display =  "Hello World, this is " . $fullname . " with HNGi7 ID " . $hng_id . 
    " and email " . $email . " using " . $language . " for "  . $stage . " task";
    return $display;
}
echo show($fullname, $email, $hng_id, $language, $stage);

?> 
