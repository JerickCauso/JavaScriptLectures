let sumOutput, differenceOutput, productOutput, quotientOutput, rmOutput;

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

sumOutput = x + y;
differenceOutput = x - y;
productOutput = x * y;
quotientOutput = x / y;
rmOutput = x % y;

console.log("value of x is " + x);
console.log("value of x is " + y);

console.log(x + " + " + y + " = " + sumOutput);
console.log(x + " - " + y + " = " + differenceOutput);
console.log(x + " * " + y + " = " + productOutput);
console.log(x + " / " + y + " = " + quotientOutput);
console.log(x + " % " + y + " = " + rmOutput);

// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);
