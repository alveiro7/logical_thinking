/* Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  n (i.e.,  factorial).

constrains
1<= n <= 10 */

const factorial = n => {
    if (n === 1)
        return 1
    return n * factorial(n - 1)

}

factorial (5)