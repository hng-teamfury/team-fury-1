import json

hng_05824 = {
    "name": "Ajadi Paul",
    "id": "HNG-05824",
    "email": "ajadi.ololade@gmail.com",
    "language": "Python",
}
dump_details = json.dumps(hng_05824)
load_details = json.loads(dump_details)

print ('Hello World, this is %s with HNGi7 ID %s and email %s using %s for stage 2 task ' % (load_details['name'], load_details['id'], load_details['email'], load_details['language']))