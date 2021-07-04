/* "" Vamos a recibir una cadena de texto e invertir las letras minúsculas
a mayúsculas y las letras mayúsculas pasarlas a minúsculas. """ */

const swap_text = (s) => {
    result=""
    for (let i in s){
        if (s[i] == s[i].toUpperCase()){
            result += s[i].toLowerCase()
        } else{
            result += s[i].toUpperCase()
        }
    }
    console.log(result)
}

swap_text("HolaatODOS")

