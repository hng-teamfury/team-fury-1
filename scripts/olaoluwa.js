const Detail =() => {
const person = {
    full_name: "Fatolu olaoluwa",
    HNG_ID: "HNG-05802" ,
    email: "Fatolu057olaoluwa@gmail.com",
    language: "Nodejs",
};

  return `Hello World, this is ${person.full_name} with HNGi7 ID ${person.HNG_ID} and email ${person.email} using ${person.language} for stage 2 task` ;
};

console.log(Detail());