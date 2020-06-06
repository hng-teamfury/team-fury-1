class User {
  constructor(name, id, email, language) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.language = language;
  }
  callUser(){
    return `Hello World, this is ${this.name} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task`
  } 
}

const newUser = new User('Benjamin Kyamanywa Mwesigwa', 'HNG-03465', 'benjaminkyam@gmail.com', 'Javascript');
console.log(newUser.callUser());