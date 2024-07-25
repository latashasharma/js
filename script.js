console.log("Hello")

//Swap the values of a and b without using a third variable//

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a);  // a = 10
console.log("b =", b);  // b = 5


//Write a JavaScript snippet using only variables and operators to determine if a given//

let num= 82;
let isEven = (num % 2 === 0);

console.log(isEven);


//You are given two integer variables, x and y.//

let x = 30;
let y = 60;
let max = (x>y) ? x:y;

console.log("Max using ternary operator:", max);