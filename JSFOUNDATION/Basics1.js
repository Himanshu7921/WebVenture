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





const objj = { foo: 1, bar: 2 };

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