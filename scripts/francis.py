import json

name="Francis Onwukwe"
id = "03944"
email ="francisohis@gmail.com"
language = "Python"
print( f"Hello World,this is {name} with  HNGi7 ID HNG-{id} and email {email} using {language} for stage 2 task")



def script():
  data = "Hello World, this is {} with HNGi7 ID {} and email {} using {} for stage 2 task".format(name,id,email,language)
  output = json.dumps(data)
  print(output) 
  

script() 