import json

first_name="Francis Onwukwe"
hngi7_id = "03944"
language = "Python"

data = "Hello World,this is {} with  HNGi7 ID HNG-{} and language{} for stage 2 task".format(first_name,hngi7_id,language)
json_output = json.dumps(data,indent=1)
print(json_output)