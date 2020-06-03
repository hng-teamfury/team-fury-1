import json

first_name="Francis Onwukwe"
hngi7_id = "03944"
lang = "Python"

data = "Hello World,this is {} with  HNGi7 ID HNG-{} and Im using {} for stage 2 task".format(first_name,hngi7_id,lang)
json_output = json.dumps(data,indent=1)
print(json_output)