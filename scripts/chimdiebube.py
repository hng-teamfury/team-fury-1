import json

myTask = {
        'Fullname': "Eke Chimdi",
        'id': "HNG-04999",
        'Email': "ozzai03@gmail.com",
        'Language': "Python"
    }
data = json.dumps(myTask)
data1 = json.loads(data)
print('Hello World, this is' + ' ' + data1['Fullname'] + ' ' + 'with HNGi7 ID' + ' ' + data1['id'] + ' '  + 'and email' + ' '  +data1['Email'] + ' ' + 'using' + ' ' + data1['Language'] + ' ' + 'for stage 2 task')
