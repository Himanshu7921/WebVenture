let name = "Alice";
let age = 25;
let isStudent = true;
const userObject = { name: "Bob", id: 123 };
const fruitsArray = ["Apple", "Banana", "Cherry"];

console.log("--- Variable Tests ---");
console.log("Name:", name); // Output: Name: Alice
console.log("Age in 5 years:", age + 5); // Output: Age in 5 years: 30
console.log("Is student?", isStudent);
console.log("User Object:", userObject); // Logs an expandable object view
console.log("Fruits Array:", fruitsArray); // Logs an expandable array view
console.log({name, age, isStudent}); // Logs variables as object properties with their names


(function () {
  "use strict";
  /* Start of your code */
  function greetMe(yourName) {
    alert(`Hello ${yourName}`);
  }

  greetMe("Kalash");
  /* End of your code */
})();

if (Math.random() < 1000) {
  var y = 5;
}
console.log(y); 

const x = 3;
console.log(x === undefined); // false
console.log(x);               // 3

(function () {
  var x = 4;
  console.log(x); 
  var x = "local value";
})();

const MY_OBJECT = { key: "value" };
console.log(MY_OBJECT.key);
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT.key);

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];

const myList = [
  "home",
  "school",
+ "hospital",
];

console.log(myList);

const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
console.log(carTypes("Kids specially to himanshu singh"));
console.log("37" - 7); // 30
console.log("37" + 7); // 377
 "37" * 7; // 259


