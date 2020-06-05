import json

hng_03593 = {
    "name": "Mark Munene",
    "id": "HNG-03593",
    "language": "Python",
}
dump_details = json.dumps(hng_03593)
load_details = json.loads(dump_details)

print ('Hello World,this is %s with HNGi7 ID %s using %s for stage 2 task ' % (load_details['name'], load_details['id'], load_details['language']))