let marks = [];
let n = Number(prompt("Enter number of students"));

for (let i = 0; i < n; i++) {
  let m = Number(prompt(`Enter marks of student ${i + 1}`));

  if (m >= 0 && m <= 100) {
    marks.push(m);
  } else {
    alert("Invalid marks! Enter between 0 and 100");
    i--; // retry same student
  }
}

console.log(marks);

