<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php 
$firstname = 'Martins';
$lastname = 'Daniels';
$fullname = "{$firstname}  {$lastname}";
$my_github_email = 'danielsmrtns@gmail.com';
$my_hng_id = 'HNG-06563';
$PL = 'PHP';
 ?>

<!-- 
	Hello World, this is <Your Full Name> with HNGi7 ID <Your HNG ID> and email <Your Email> using <Your Programming Language> for stage 2 task. -->
<?php 
print('Hello World, ');
echo "this is {$fullname} with HNGi7 ID {$my_hng_id} and email {$my_github_email} using {$PL} ";
print('for stage 2 task.');

 ?>
</body>
</html>