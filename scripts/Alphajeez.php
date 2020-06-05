<?php

        function output_message($full_name, $id, $email, $language){

            $output =  "Hello World, this is $full_name with HNGi7 ID $id and email $email using $language for stage 2 task";
            return $output;
        }

        $full_name = "Prince Chukwudire";
        $id = "HNG-01077";
        $email = "chimeremezechukwudire@gmail.com";
        $language = "PHP";

        echo output_message($full_name, $id, $email, $language);

?>