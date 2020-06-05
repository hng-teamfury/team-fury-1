//ariable declarations
const fullName = "Adedeji Adewale Nurudeen";
const hngId = "HNG-06585";
const email = "djsmacker01@gmail.com"
const language = "Javascript";


//Function Outputs The Text
const output = (fullName, hngId, email, language) => {
     const result = `Hello World, this is ${fullName} with HNGi7 ID ${hngId} and email ${email} using ${language} for stage 2 task`;

    return result;
};
/// console log your result
console.log(output(fullName, hngId, email, language));