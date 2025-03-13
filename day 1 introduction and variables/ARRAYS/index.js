//ARRAYS THEY CAN STORE MULTIPLE VALUES OF DIFFERENT DATA TYPE
//how t create an empty array using array constructor
/*
let arr = Array();
console.log(arr);

let students = Array();
console.log(students);
*/

// creating an array with values
const fruits = ["mango", "apple", "lemon"];
const vegetables = ["sukumawiki", "potato", "cabbage"];
const animalProducts = ["meat", "milk", "ghee", "pork"];
//printing an  array
console.log(fruits, vegetables, animalProducts);
//find the length
console.log("fruits:", fruits.length, "vegetables", vegetables.length);

//creating an array using split
//split a string at different positions and change to an array

let js = "JavaScript";
const char = js.split("");
console.log(char);

//Accesing array items using index
//starting from 0
let nameList = ["bakari", "juma", "ken"];
let individual = nameList[1];
console.log(individual);
console.log(nameList[2]);
// modifying an array
nameList[0] = "alicia"; // this way replaces the value in that index
console.log(nameList[0]);
