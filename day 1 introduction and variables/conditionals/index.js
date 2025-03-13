//conditionals statements used for making decisions based on different conditions
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a === 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

let weather = "rainy";
if (weather === "rainy") {
  console.log("you need a rain coat");
} else if (weather === "cloudy") {
  console.log("carry a pullover");
} else {
  console.log("no need");
}

//switch statement an alternative for else that starts with a switch keyword

let age = 20;
switch (age) {
  case "rainy":
    console.log("You need a raincoat");
    break;
  case "cloudy":
    console.log("might be cold, carry a jacket");
    break;
  case "sunny":
    console.log("wear a vest");
    break;
  default:
    console.log("no need for rain coat");
}
