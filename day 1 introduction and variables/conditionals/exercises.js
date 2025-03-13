/*let age = parseInt(prompt("Enter your age"));
if (age >= 18) {
  console.log(alert("You are old enough to drive"));
} else if (age < 18) {
  console.log(alert(`You are left with ${18 - age} years to drive`));
}
*/

//exercise
/*let myAge = 25;
let yourAge = parseInt(prompt("Enter your age"));
if (myAge < yourAge) {
  console.log(alert(`You are ${yourAge - myAge} years older than me`));
} else if (myAge > yourAge) {
  console.log(alert(`I am ${myAge - yourAge} years older than you`));
}
*/

//exercise
/*
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}
*/

//using ternary operator
let x = 10;
let z = 5;
x > z
  ? console.log(`${x} is greater than ${z}`)
  : console.log(`${z} is less than ${x}`);

/*
let num1 = parseInt(prompt("Enter a number"));
//let num2 = parseInt(prompt('Enter number '))
if (num1 % 2 === 0) {
  console.log(alert("the number is even"));
} else {
  console.log(alert("number is odd"));
}
*/
//using ternery
let numOne = parseInt(prompt("Enter number"));
numOne % 2 === 0
  ? console.log(alert("Number is even"))
  : console.log(alert("Number is odd"));
