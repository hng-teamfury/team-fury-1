
function speach(){
    let details = {
        fullname: 'Yusuf Emmanuel',
        id: 'HNG-02399',
        language: 'javascript',
        email: 'emaz4me@gmail.com'
    }
    JSON.stringify(details)
    return console.log(`Hello World, this is ${details.fullname} with HNGi7 ID ${details.id} using ${details.language} for stage two task`)
}

speach()