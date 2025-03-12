//includes() takes a substring argument and checks if that substring argument exist in that string
//returns true if it exists and false if it does not exist

let string = "30 Days Of JavaScript";
console.log(string.includes("30"));
console.log(string.includes("js"));

//example 2
let mySchools = "TTu,Kd,Lga,Moringa";
console.log(mySchools.includes("TTu"));
console.log(mySchools.endsWith("Moringa"));
console.log(mySchools.includes("kd"));
