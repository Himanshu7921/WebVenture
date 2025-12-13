let i1 = 0;
let j1 = 10;
checkIandJ: while (i1 < 4) {
  console.log(i1);
  i1 += 1;
  checkJ: while (j1 > 4) {
    console.log(j1);
    j1 -= 1;
    if (j1 % 2 === 0) {
      continue;
    }
    console.log(j1, "is odd.");
  }
  console.log("i =", i1);
  console.log("j =", j1);
}

function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}\n`;
  }
  result += "\n";
  return result;
}

const student = {
  name: "Kalash",
  branch: "CSE-AIML",
  year: 2
};

const output = dumpProps(student, "student");

console.log(output)




//Difference between for in and for of
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7





const objj = { foo: 1, bar: "2" };

for (const [key, val] of Object.entries(objj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2




 
//Functions in Js

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"





//When you pass an array as a parameter, if the function changes any of the array's values,
// that change is visible outside the function, as shown in the following example:


function myFunc(theArr) {
  theArr[0] = 30;
}

const Arr = [45];

console.log(Arr[0]); // 45
myFunc(Arr);
console.log(Arr[0]); // 30





//Function declarations and expressions can be nested, which forms a scope chain. For example:

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(4,5));





//Such a function can be anonymous; it does not have to have a name.
//For example, the function square could have been defined as:

const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16





//Factorial 
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(4)); // 6




//Function expressions are convenient when passing a function as an argument to another function.
//The following example defines a map function that should receive a function as first argument and an array as second argument.
//Then, it is called with a function defined by a function expression:

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]





//A function can call itself. For example, here is a function that computes factorials recursively:

function factoriall(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factoriall(n - 1);
}





//In fact, recursion itself uses a stack: the function stack. 
//The stack-like behavior can be seen in the following example:

function foo(i) {
  if (i < 0) {
    return console.log(1);
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// 1
// end: 0
// end: 1
// end: 2
// end: 3





//Functions scopes and closure

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const nname = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${nname} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"





// Little bit complex 
const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver






// The inner variables of the inner functions act as safe stores for the outer arguments and variables.
// They hold "persistent" and "encapsulated" data for the inner functions to work with.
// The functions do not even have to be assigned to a variable, or have a name.

const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"





// A function (A) contains a function (B), which itself contains a function (C).
// Both functions B and C form closures here. So, B can access A, and C can access B.
// In addition, since C can access B which can access A, C can also access A.

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)






// The name conflict happens at the statement return x * 2 and is between inside's parameter x and outside's variable x.
// The scope chain here is inside => outside => global object.
// Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).

function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)





// arguments lets you access all values passed to a function: first is arguments[0], total is arguments.length.
//  It allows handling unknown numbers of arguments, like joining many strings dynamically.

function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "






// n the following example, if no value is provided for b, its value would be undefined when evaluating a*b,
// and a call to multiply would normally have returned NaN. However, 
// this is prevented by the second line in this example:

function multiplys(a, b) {
  b = typeof b !== "undefined" ? b : 1; // b = typeof b if not undefined else b = 1
  return a * b;
}

console.log(multiplys(5)); // 5






//In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end.
//  The function then multiplies these by the first argument.

function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arrs = multiply(2, 1, 2, 3);
console.log(arrs); // [2, 4, 6]




//In some functional patterns, shorter functions are welcome. Compare:

const a1 = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a1.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a1.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]