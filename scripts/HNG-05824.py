import json

hng_05824 = {
    "name": "Ajadi Paul",
    "id": "HNG-05824",
    "email": "ajadi.ololade@gmail.com",
    "language": "Python",
}
dump_details = json.dumps(hng_05824)
load_details = json.loads(dump_details)

print ('Hello World, this is', load_details['name'],
            'with HNGi7 ID', load_details['id'],
            'using', load_details['language'],
            'for stage 2 task')
# Hello World, this is [full name] with HNGi7 ID [ID] using [language] for stage 2 task