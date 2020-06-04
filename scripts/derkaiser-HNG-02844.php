<?php
    $info = array("name"=>"Falodu Stephen Abimbola", "hng_id"=>"HNG-02844", "language"=>"php", "email"=>"stephenfalodu@icloud.com");

    echo "Hello World, this is " . $info['name'] . " with HNGi7 ID: " . $info['hng_id'] . " using " . $info['language'] . " for stage 2 task";

    echo json_encode ($info);

?>