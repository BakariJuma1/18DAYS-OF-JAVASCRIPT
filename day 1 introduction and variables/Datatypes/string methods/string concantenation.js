//declare different variables of different data types

let name = " bakari";
let secondName = "juma";
let country = "kenya";
let city = "nairobi";
let language = "js";
let job = "dev";
//concantenate with addition operator
let fullName = name + secondName;
console.log(fullName);
//concantenate with concat() method
let fullName2 = name.concat(secondName);
console.log(fullName2);
// template literals

let bio = `I am ${name}, living in ${country} in the  city of ${city} .
right now am specializing in ${language} and am a junior ${job}`;
console.log(bio);
console.log(fullName);

let algorithim = Math.random();
let zeroToTen = algorithim * 11;
console.log(zeroToTen);
