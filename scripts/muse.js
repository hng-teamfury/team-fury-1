const muse = {
    hngId:'HNG-02155',
    name: 'Oluwasegun Akinnage',
    language: 'JavaScript'
}

const me =(person)=>{
    let output = `Hello World, this is ${person.name} with HNGi7 ID ${person.hngId} using ${person.language} for stage 2 task`
    console.log(output)
}
me(muse)