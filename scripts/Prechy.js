function hello() {
  let info = {
    fullname: "Precious Okafor",
    ID: "HNG-00208",
    language: "Javascript",
    email: "preciousrobinsonokafor@gmail.com"
  }

  return `Hello World, this is ${info.fullname} with HNGi7 ID ${info.ID} and email ${info.email} using ${info.language} for stage 2 task`;
}

console.log(hello());
