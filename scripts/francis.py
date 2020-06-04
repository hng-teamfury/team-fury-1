import json

first_name="Francis Onwukwe"
hngi7_id = "03944"
email ="francisohis@gmail.com"
language = "Python"

data = "Hello World,this is {} with  HNGi7 ID HNG-{} and email {} using {} for stage 2 task".format(first_name,hngi7_id,email,language)
json_output = json.dumps(data,indent=1)
print(json_output)