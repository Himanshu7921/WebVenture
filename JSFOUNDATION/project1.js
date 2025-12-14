// Project 1
// Input marks array

let marks = [];

let n = Number(prompt("Enter number of students: "));

for(let i = 0; i < n; i++){

   let m = Number(prompt(`Enter marks of student ${i+1}`));


   if(m>=0 && m <=100){
    marks.push(m);
   } else {
    alert("Enter valid number!");
    i--;
   }
}

console.log(marks);

//Calculate total, average

let sum = 0;
for(let j = 0; j<marks.length;j++){
sum += marks[j];
};

console.log(`Total sum = ${sum}`);
let avg = (sum/marks.length);
console.log(`Average marks = ${avg}`);


//Grade using condition

// psuedo code

// if (marks <= 100 && marks >= 90);
// grade == A 
// else if (condition)...

// else if (condition)...

// else 

for(let l =0; l<marks.length; l++){
   console.log(`student${[l]} = ${marks[l]}`);
};


for(k=0;k<marks.length;k++){

   if (marks[k]<= 100 && marks[k] >=90){
      console.log(`student${[k]} Got A grade\n`);
      console.log("Pass");
   }
   else if (marks[k]< 90 && marks[k] >=80){
      console.log(`student${[k]} Got B grade\n`);
      console.log("Pass");
   }
   else if (marks[k]< 80 && marks[k] >=70){
      console.log(`student${[k]} Got C grade\n`);
      console.log("Pass");
   }
   else{
      console.log(`student${[k]} Failed the exam\n`);
      console.log("Fail");
   }  
}


// Next Step (Level-Up Challenge)

// Try Project 2 (Logic Only):

// Find highest & lowest marks

// Count number of pass/fail students

// Store result as objects:

let highest_marks = 0;


for (let i = 0; i <marks.length;i++){
   if(marks[i+1]>marks[i]){
      highest_marks = marks[i+1];
   } else {
      continue
   }
};
console.log(`highest marks=${highest_marks}`);

let lowest_marks = marks[0];
for (let j = 1; j <marks.length;j++){
   if(marks[j]<lowest_marks){
      lowest_marks = marks[j];
   } else {
      continue
   }
};

console.log(`lowest_marks=${lowest_marks}`);



//Project 2 

// Prime check

// Factorial

// Fibonacci

// Even/odd filter from array

// prime number = 1 , 2 , 3  , 5

// prime number between 1 to 10

for(let i = 2; i <=10; i++){
   let is_prime = true;
      for(let j = 2; j < i;j++){
         if(i % j === 0){
         is_prime = false;
         break;
         }else{
         continue;
         }
      }
  if(is_prime){
   console.log(`${i} is a prime number`);
   }
}

// factrial of number 

let factorial_input = Number(prompt(`Enter a number for factorial: `));

if (factorial_input == 1 || factorial_input == 0){
   console.log(`Factorial of ${factorial_input} is 1`);

}else if (factorial_input < 0 || Number.isNaN(factorial_input)) {
  console.log("Factorial is not defined for this input");

}else{
   let resultt = 1;
   for(let i = factorial_input; i > 0; i--){
      resultt *= i;
   }
   console.log(resultt);
}


// Fibbonacci

// Fibonacci series (first 5 numbers)

let fib = [0, 1];

for (let i = 2; i < 5; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);




