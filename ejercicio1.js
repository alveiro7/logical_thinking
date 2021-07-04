/* cuál es el segundo número más grande (en valor) dentro de un array de números. */



const segundoMayor = (numbers) => {
    let first = numbers[0]
    let second = 0
    for (let i=0; i<=numbers.length; i++){
        if (numbers[i] > first){
            second = first
            first = numbers[i]
        }
        if (numbers[i] > second && numbers[i < first]){
            second = numbers[i]
        }
    }
    return second
}

let nums = [10, 25, 45, 0, 10, 90, 5]

console.log(segundoMayor(nums))