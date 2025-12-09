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

function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  // prettier-ignore
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (!months[mo]) {
    throw new Error("Invalid month code"); // throw keyword is used here
  }
  return months[mo];
}

//console.log(getMonthName(3));

try {
  // statements to try
  myMonth = "Jun"
  //monthName = getMonthName(19);
  console.log(monthName); // function could throw exception
} catch (e) {
  console.log("Error"); // pass exception object to error handler (i.e. your own function)
} 




function f() {
  try {
    console.log(0);     // Step 1
    throw "bogus";      // Step 2 → error thrown
  } catch (e) {
    console.log(1);     // Step 3 → catch handles the error
    return console.log(True);       // Step 4 → return is scheduled, not executed yet
  } finally {
    console.log(3);     // Step 5 → finally ALWAYS runs
    return console.log(false);       // Step 6 → overrides the earlier return
  }
}
f();




function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    // This throw statement is suspended until
    // finally block has completed
    throw e;
  } finally {
    return false; // overwrites the previous "throw"
    // `f` exits here
  }
}

try {
  console.log(f());
} catch (e) {
  // this is never reached!
  // while f() executes, the `finally` block returns false,
  // which overwrites the `throw` inside the above `catch`
  console.log('caught outer "bogus"');
}

// Logs:
// caught inner "bogus"
// false

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}


function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) { //select is inbuilt feature of html if selected then its true
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});





let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);





let n = 0;
let m = 0;
while (n < 3) {
  n++;
  console.log("n=",n)
  m += n;
  console.log("m=",m)
}





let a = 0;
let p = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", a);
  a += 1;
  p = 1;
  while (true) {
    console.log("Inner loops:", p);
    p += 1;
    if (p === 10 && a === 10) {
      break labelCancelLoops;
    } else if (p === 10) {
      break;
    }
  }
}


