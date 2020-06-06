// My detail script
var myInfo = {
	fullname: "Tochukwu Mezue",
	ID:"HNG-03007",
	email:"teejaymezue8@gmail.com",
	language:"JavaScript"
}
// displays my information
function display(){
	const displayInfo = `Hello world, this is ${myInfo.fullname} with HNGi7 ID ${myInfo.ID} and email ${myInfo.email} using ${myInfo.language} for stage 2 task`;
	return console.log(displayInfo);
}

display();
