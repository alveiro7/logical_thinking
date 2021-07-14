/* Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides length and width .
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout by locked stub code in the editor. */

const getArea = (length, width) => {
    let area
    area = length * width
    return area
}

const getPerimeter = (length, width) => {
    let perimeter
    perimeter = 2*(length + width)
    return perimeter
}

console.log(`Area es ${getArea(4, 5)}`)
console.log(`Perimetro es ${getPerimeter(5, 5)}`)