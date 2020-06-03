let details = {
    fullname: 'Yusuf Emmanuel',
    id: 'HNG-02399',
    language: 'javascript'
}

function speach(name, id, language){
    return console.log(`Hello World, this is ${name} with HNGi7 ID ${id} using ${language} for stage two task`)
}

speach(details.fullname, details.id, details.language)