var profile = {
    fullname: "Ekpenyong David Michael",

     email: "ekpenyongdavidmichael@gmail.com",

    hng_id: "HNG-01875",

    language: "Javascript",

   
    
}

function myprofile(){
    var result = `Hello world, this is ${profile.fullname} with HNGi7 ID ${profile.hng_id} and email ${profile.email} using ${profile.language} for stage 2 task`;
    return console.log(result);
}

myprofile();