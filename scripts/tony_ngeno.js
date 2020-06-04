var bio = {
    fullname: "Tony Ngeno",
    hng_id: "HNG-00792",
    language: "javascript",
    email: "tonyngeno123@gmail.com"
}

const details = () => {
    var message = `Hello world, this is ${bio.fullname} with HNGi7 ID ${bio.hng_id} and email ${bio.email} and I'm using ${bio.language} for stage 2 task`;
    return console.log(message);
}

details();