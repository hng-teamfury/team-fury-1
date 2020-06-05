var myDetails = {name:"Ernest Paul Oganji", 
	email:"epospiky@gmail.com", 
	id:"HNG-03606", 
	language:"JavaScript"};
const fullDetails = function(){
	return "Hello, world! This is " +myDetails.name+ " with the HNG ID" +myDetails.id+ " and email address " +myDetails.email+ " using " +myDetails.language+ "language for stage 2 promotion";
	}
console.log(fullDetails());