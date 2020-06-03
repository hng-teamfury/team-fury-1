function User () {
  const mydetails = {fullname: 'olajide oluniyi', ID: 'HNG-01994', language: 'javascript'}
  const myDetails = 'Hello World, this is ' + mydetails.fullname + ' with HNGI7 ID ' + mydetails.ID + ' using ' + mydetails.language + ' for stage 2 task' ;
  const intern = JSON.stringify(myDetails)
  console.log(intern)}

User()
