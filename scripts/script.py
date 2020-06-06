full_name = str(input("What is Your Name? "))
ID = str(input("What is Your ID? "))
email = str(input("What is Your Email? "))
language = str(input("Which programming language do you use? "))

def HNG_intro(full_name, ID, email, language):
    print ("Hello World, this is {} with HNGi7 ID {} and email {} using {} for stage 2 task".format(full_name, ID, email, language))


HNG_intro(full_name, ID, email, language)