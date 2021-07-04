/* cuál es el segundo número más grande (en valor) dentro de un array de números. */



const segundoMayor = (numbers) => {
    numbers.sort( function(a, b){
        return b-a
    } )
    return numbers[1]
}

let nums = [30, 25, 45, 0, 10, 90, 5]

console.log(segundoMayor(nums))