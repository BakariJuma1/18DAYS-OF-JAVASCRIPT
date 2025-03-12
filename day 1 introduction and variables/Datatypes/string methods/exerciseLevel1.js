//Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
let challenge = "30 DAYS OF JAVASCRIPT";
//Print the string on the browser console using __console.log()__
console.log(challenge);
// Print the __length__ of the string on the browser console using _console.log()_
console.log(challenge.length);
// Change all the string characters to capital letters using __toUpperCase()__ method
console.log(challenge.toUpperCase());
// Change all the string characters to lowercase letters using __toLowerCase()__ method
console.log(challenge.toLowerCase());
// Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
console.log(challenge.slice(0, 2));
//Check if the string contains a word __Script__ using __includes()__ method
console.log(challenge.includes("Script"));
// Split the __string__ into an __array__ using __split()__ method
console.log(challenge.split(" "));
//. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
console.log(challenge.replace("JAVASCRIPT", "PYTHON"));
//exercise level two
console.log(
  `There is no exercise better for the heart than reaching down and lifting people up.`
);

let num = Math.random();
let num1 = num * 100;
console.log(num1);

console.log(challenge.match("a"));
