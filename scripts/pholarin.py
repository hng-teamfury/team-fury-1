import json

Language="Python"
Name="Ibrahim Folarin"
ID="HNG-03966" 
Email="folarin2010@gmail.com"

def intro():
  data = "Hello World, this is {} with HNGi7 ID {} and email {} using {} for stage 2 task".format(Name,ID,Email,Language)
  output = json.dumps(data)
  print(output) 
  

intro() 
