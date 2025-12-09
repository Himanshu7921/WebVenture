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