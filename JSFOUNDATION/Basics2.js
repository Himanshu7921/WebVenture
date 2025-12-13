// If an expression evaluates to an object, then the left-hand side of an assignment expression
// may make assignments to properties of that expression. For example:

const objs = {};

objs.x = 3;
console.log(objs.x); // Prints 3.
console.log(objs); // Prints { x: 3 }.

const key = "y";
objs[key] = 5;
console.log(objs[key]); // Prints 5.
console.log(objs); // Prints { x: 3, y: 5 }.





// If an expression does not evaluate to an object,
// then assignments to properties of that expression do not assign:

const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.





//Expression	Result	Binary Description
// 15 & 9	      9	    1111 & 1001 = 1001
// 15 | 9	      15	1111 | 1001 = 1111
// 15 ^ 9	      6	    1111 ^ 1001 = 0110
// ~15	         -16	~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000  [~n = -(n + 1)]
// ~9	         -10	~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110


// 8 >> 1    // 4   ✅ correct
// 8 >>> 1   // 4   ✅ correct
// -8 >> 1   // -4  ✅ correct
// -8 >>> 1  // ❌ not 4 its 2147483644

//Step 1: -8 in 32-bit binary (JS uses this)
// -8 = 11111111 11111111 11111111 11111000
//Step 2: Zero-fill right shift by 1
//01111111 11111111 11111111 11111100 = 2147483644




//The following code shows examples of the && (logical AND) operator.
// const a1 = true && true; // t && t returns true
// const a2 = true && false; // t && f returns false
// const a3 = false && true; // f && t returns false
// const a4 = false && 3 === 4; // f && f returns false
// const a5 = "Cat" && "Dog"; // t && t returns Dog
// const a6 = false && "Cat"; // f && t returns false
// const a7 = "Cat" && false; // t && f returns false


//The following code shows examples of the || (logical OR) operator.
// const o1 = true || true; // t || t returns true
// const o2 = false || true; // f || t returns true
// const o3 = true || false; // t || f returns true
// const o4 = false || 3 === 4; // f || f returns false
// const o5 = "Cat" || "Dog"; // t || t returns Cat
// const o6 = false || "Cat"; // f || t returns Cat
// const o7 = "Cat" || false; // t || f returns Cat



//a ?? b   →   b only when a is null or undefined
// const n1 = null ?? 1; // 1
// const n2 = undefined ?? 2; // 2
// const n3 = false ?? 3; // false
// const n4 = 0 ?? 4; // 0





function f() {
  console.log("F!");
  return 2;
}
function g() {
  console.log("G!");
  return 3;
}
let x2, y2;

y2 = x2 = f();
y2 = [f(), x2 = g()];
x2[f()] = g();

//result = F F G F G

