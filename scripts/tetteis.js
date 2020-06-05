let myHngDetails = {
    fullName: "Tettei Shahday-Annang",
    id: "HNG-03510",
    email: "tetteis@gmail.com",
    language: "JavaScript"
}

const outputData = () => {
    return `Hello World, this is ${myHngDetails.fullName} with HNGi7 ID ${myHngDetails.id} and email ${myHngDetails.email} using ${myHngDetails.language} for stage 2 task`;
}

console.log(outputData());