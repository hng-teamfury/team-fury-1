<?php
class UI{
    static function displayMyDetails($fullName, $hng_id, $lang, $email){
    $message = "Hello World, this is $fullName with HNGi7 ID $hng_id and email $email using $lang for stage 2 task";
    return $message;
}

}


$output = UI::displayMyDetails("Sheu Ayomide Abdulazeez", "HNG-00674","PHP","abdulazeezsheu1234@gmail.com");
print($output);

?>