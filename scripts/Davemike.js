class Name{
	constructor(name,id,language,){
		this.name=name;
		this.id=id;
		this.language=language;
		
	}
	introduce(){
		console.log(`Hello World, this ${this.name},with HNGi7 ID ${this.id} using ${this.language} for stage 2 task`);
	}
}
const name1= new Name('Ekpenyong David Michael','HNG-01875','Javascript');
name1.introduce();























// let name = 'Abisoye Alli-Balogun';
// let id = 'HNG-00110';
// let language = 'Javascript';
// let output = "Hello World, this is " + name + " with HNGi7 " + id + " using " + language + " for stage 2 task";
// function displayOutput() {
//     return output;  
// };

// console.log(displayOutput());
// displayOutput();