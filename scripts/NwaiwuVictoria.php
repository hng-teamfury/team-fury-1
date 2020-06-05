<?php
class Internship {
  // Properties

  public $name;
  public $id;
  public $email;
  public $lan;

 
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
  function set_id($id) {
    $this->id = $id;
  }
  function get_id() {
    return $this->id;
  }
  function set_email($email) {
    $this->email = $email;
  }
  function get_email() {
    return $this->email;
  }
  function set_lan($lan) {
    $this->lan = $lan;
  }
  function get_lan() {
    return $this->lan;
  }
}

$obj = new Internship();
$obj->set_name('Nwaiwu Chiamaka Victoria');
$obj->set_id('HNG-05836');
$obj->set_email('chiamakavictoria95@gmail.com');
$obj->set_lan('PHP');
echo "Hello World, ";
echo "this is " . $obj->get_name() ."<br>";
echo "with HNGi7 ID " . $obj->get_id()."<br>";
echo " and email " .$obj->get_email()."<br>"; 
echo " using " .$obj->get_lan();
echo " for stage 2 task";
?>
