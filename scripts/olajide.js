function User () {
  const mydetails = {fullname: 'olajide oluniyi', ID: 'HNG-01994', language: 'javascript'}
  const myDetails = 'Hello World, this is ' + mydetails.fullname + ' with HNGi7 ID ' + mydetails.ID + ' using ' + mydetails.language + ' for stage 2 task' ;
  const intern = JSON.stringify(myDetails)
  return intern}

User()
