<?php

  function introduce($fullname, $id, $language){
  	$introduction="Hello World, this is $fullname with HNGi7 ID $id using $language for stage 2 task";
  	return $introduction;
  }

  echo introduce("Kazeem David", "HNG-00957", "Php");
?>