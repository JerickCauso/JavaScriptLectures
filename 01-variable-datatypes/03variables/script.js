//Way to declare variable
//var, let & const

let firstname = "Juan";
const lastname = "Cruz";
console.log(firstname, lastname, age);

var age = 30;

console.log(age);

//Naming Conventions
//Only letters, numbers, underscores and dollor signs
//Can't start with a number

//Multi-word Formatting
//firstName = camelCase
//first_name = underscore
//FirstName = PascalCase
//firstname = lowercase

//with let we can declare a value without a assigning a value

let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

//we cannot reassign valure to const
// x = 200;
console.log(x);

const arr = [1, 2, 3, 4];
console.log(arr);
// arr = [1, 2, 3, 4, 5];
//we can manipulate arrays and objects using const
arr.push(5);
console.log(arr);

const person = {
  name: "Jerick",
};
console.log(person);

person.name = "Causo";
person.email = "jerickcauso@gmail.com";
console.log(person);

//Declare multiple value at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(a);
console.log(d);
console.log(e);
