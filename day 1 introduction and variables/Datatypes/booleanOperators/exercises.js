let number = "10";
number === 10 ? console.log("number is 10") : console.log("number is not 10");

let num1 = "9.8";
num1 === 10 ? console.log("true") : console.log("false");

let isCloudy = true;
let isSunny = false;

console.log(!(4 > 3) && 10 < 12);

//ex1
/*let base = prompt("Enter the base");
let height = prompt("enter the height");
let area = 0.5 * base * height;
console.log(alert(`Your area is ${area}`));*/

//ex2
let sideA = parseInt(prompt("Enter side A"));
let sideB = parseInt(prompt("Enter side B"));
let sideC = parseInt(prompt("Enter side C"));
let perimeter = sideA + sideB + sideC;
console.log(alert(`The perimeter of the triangle is ${perimeter}`));

//ex3
let width = parseInt(prompt("Enter the width"));
let length = parseInt(prompt("Enter the lenth"));
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);
console.log(
  alert(
    `This is the area of a rectangle ${areaOfRectangle} while its perimeter is ${perimeterOfRectangle}`
  )
);
