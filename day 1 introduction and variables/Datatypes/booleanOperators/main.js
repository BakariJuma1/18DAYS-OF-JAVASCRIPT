//booleans they represent true or false
let isSuny = false;
let isRainy = true; //

//operators
//assignment operators = used to assign a variable
let firstName = "kingston";
let tittle = "crook";

//arithmetic operators multiplication(a*b),division(a/b),modulus(a%b),exponentiation(a**b)

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;
let remainder = num1 % num2;
let powerOf = num1 ** num2;
console.log(sum, subtract, multiply, divide, remainder, powerOf);

//area of a circle
const PI = 3.142;
let radius = 7;
let areaOfACircle = PI * radius * radius;

console.log(`This is the  area of a circle ${areaOfACircle}`);

//caclulate the weight of an object
const gravity = 9.81;
let mass = 72;
let weight = gravity * mass;
console.log(`This is my weight ${weight}kgs`);

//comparison operators
//we use them to compare different values
console.log(3 == "3"); //compares only value
console.log(3 === "3"); // not true compares value and data type its strict comparison
console.log(0 != 1); //true !==not equal to

//logical operators
// the following are the common ones &&,||,!
// the && gets true only if two operands are true
//The || if one of the operand is true you get true
//The ! negates true to false and false to true
console.log(3 == 3 && 4 == 4); //true
console.log(3 == 3 || 4 == 4); //true
console.log(!(3 == 3)); //false

//increment  and decrement operators
let count = 0;

console.log(count++);

let countOne = 5;
console.log(countOne--);

//ternary operators
//allow you to write conditional statements without using if statements
let isWindy = true;
isWindy
  ? console.log("You need a sweater")
  : console.log("Dont carry a sweater");
let age = 24;
age > 18 ? console.log("You are an Adult") : console.log("You are a minor");

let number = 10;
number % 2 === 0 ? console.log("even") : console.log("odd");

// operator precedence (bodmas) deermines the order of operations
//Window methods
//window alert() displays an alert with a specified message
//do not use much of it as its distracting
//window prompt() display an input dialog box with a specified message
//window confirm() display a dialog box with a specified message and ok and cancel buttons
//window methods can be accessed with the window keyword and also directly
//let numberInput = prompt("enter number");
//console.log(numberInput);

//confirm() method displays dialog box with a with a specified message and ok and cancel buttons often used to ask for user confirmation
//const agree = confrim("Are you sure youd like to delete");
//console.log(agree);

// Date object
//methods used to get the date and time
//creating a time object

const now = new Date();
console.log(now);
//getting full year extract full year from a time object

const today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getMinutes());
