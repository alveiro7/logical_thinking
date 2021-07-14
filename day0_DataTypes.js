/* Task

Variables named firstInteger, firstDecimal, and firstString  are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:

Convert secondInteger to an integer (Number type), then sum it with firstInteger  and print the result on a new line using console.log.
Convert  secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
Print the concatenation of firstString  and secondString  on a new line using console.log. Note that firsString must be printed first. */

const performOperation = (secondInteger, secondDecimal, secondString) => {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    console.log(firstInteger + Number(secondInteger))
    console.log(firstDecimal + Number(secondDecimal))
    console.log(firstString.concat(secondString))
}


performOperation("12", "4.32", "is the best place to learn and practice coding!")