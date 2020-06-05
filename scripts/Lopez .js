const sendMessage = () => {
    const me = {
   name: 'Lopez Yetunde',
   id: 'HNG-00618',
   email: 'littleyetty@gmail.com',
   language: 'JavaScript'
   }
     const { name, id, email, language } = me;
     return `Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task`
}
console.log(sendMessage())