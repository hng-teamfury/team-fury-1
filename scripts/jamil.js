function printMyDetails() {
 let data = {
  file: "jamil.js",
  output: "Hello World, this is Muhammad Jamil with HNGi7 ID HNG-04304 using Javascript for stage 2 task",
  fullName: "Jamil Umar",
  HNGi7ID: "HNG-04304",
  email: "jamil.umarmuhammad@gmail.com",
  language: "Javascript",
  status: "Pass"
 };



 const result = JSON.stringify("Hello world, this is " + data.fullName + " with HNGi7 ID " + data.HNGi7ID + " using " + data.language + " for stage 2 task.");

 console.log(JSON.parse(result));
 return JSON.parse(result);
}

printMyDetails();