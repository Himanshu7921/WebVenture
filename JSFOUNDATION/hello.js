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

const carr = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(carr.manyCars.b); // Jeep
console.log(carr[7]); // Mazda





const theProtoObj = {
  toString() {
    return "I am the parent";
  }
};

const handler = "hello";

const obj = {
  __proto__: theProtoObj,
  handler,
  toString() {
    return `d ${super.toString()}`;
  },
  ["prop_" + (() => 42)()]: "hello",
};

console.log(obj.toString()); // d I am the parent
console.log(obj.prop_42);    // hello




var name2 = "Kalash";
console.log(`Hello ${name2}`);




const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg);
  }
  return arg;
};






const print = (segments, ...args) => {
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;

// I need to do:
// - Learn JavaScript
// - Learn Web APIs
// - Set up my website
// - Profit!
// My current progress is: {"javascript":20,"html":50,"css":10}





const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.




var z = 1;
{
var z = 2;
}
console.log(z); // 2



// while (x < 10) {
//   x++;
// }

// if (condition1) {
//   statement1;
// } else if (condition2) {
//   statement2;
// } else if (conditionN) {
//   statementN;
// } else {
//   statementLast;
// }



const b = new Boolean(false);
if (b) {
  // this condition evaluates to true
}
if (b == true) {
  // this condition evaluates to false
}



  // ⭐ Your validation function
  function checkData() {
    if (document.form1.threeChar.value.length === 3) {
      print`Valid input: ${document.form1.threeChar.value}`;
      return true;
    }

    alert(
      `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`
    );

    print`Invalid input: ${document.form1.threeChar.value}`;
    return false;
  }

document.form1 = { threeChar: { value: "Her" } };
checkData();




// switch (expression) {
//   case label1:
//     statements1;
//     break;
//   case label2:
//     statements2;
//     break;
//   // …
//   default:
//     statementsDefault;
// }

let fruitType = "Bananas";
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");



// To throw error 
// throw {
//   toString() {
//     return console.log("I'm an object!");
//   },
// };

// console.log("Hello");

// throw 42;
// var f = 49;
// console.log(f);





