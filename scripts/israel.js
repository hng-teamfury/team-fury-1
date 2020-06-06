const sendMessage = () => {
     const me = {
	name: 'oluwafemi adeoye',
	id: 'HNG-04195',
	email: 'adeoyefemi3@gmail.com',
	language: 'JavaScript'
	}
      const { name, id, email, language } = me;
      return `Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task`
}
console.log(sendMessage())
