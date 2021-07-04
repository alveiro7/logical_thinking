""" Vamos a recibir una cadena de texto e invertir las letras minúsculas
a mayúsculas y las letras mayúsculas pasarlas a minúsculas. """
string = 'Hola'
result  = ''

for letter in string:
	if letter == letter.upper():
		result += letter.upper()
	else:
		result += letter.lower()

print(result)



def swap_text(s):
    result = ""
    for letter in s:
        if letter == letter.upper():
            result += letter.lower()
        else:
            result += letter.upper()
    print(result)

swap_text("Hola a tODOS")