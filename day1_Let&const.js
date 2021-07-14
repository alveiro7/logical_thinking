/* Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, r , denoting the radius of a circle from stdin.
Use PI and r to calculate the  and  of a circle having radius r.
Print  area as the first line of output and print perimeter as the second line of output. */

const calculate = (n) => {
    let r = n

    const PI = Math.PI

    console.log(`Area ${PI * Math.pow(r,2)}`)

    console.log(`Perimetro ${2 * PI * r }`)

}

calculate(10)