

// function test() {
//   var a = 10;
//   let b = 100;
//   const c = 1000;
//   test1();
//   function test1() {
//    console.log(a);
//    console.log(b);
//    console.log(c);
//   }
// }
// console.log(a);
// test();


// function a() {
//   var x = 10;

//   function b() {
//     console.log(x);
//   }

//   return b;
// }

// var z = a();
// console.log(z);
// //.....
// z();


//Number and Math in JS

//There are two ways to create numerical variable
const score = 400;
console.log(score);

const balance = new Number(500);
console.log(balance);

//toString() methos: this method is used to convert number to String

const test_string = "dev";
console.log(typeof test_string); //string
console.log(balance.toString());
console.log(typeof (balance))//object


//toFixed(digits) : The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.returns a "string" representing the given number using fixed-point notation.



const test = 123.456;
console.log(test.toFixed(2));
console.log(typeof(test.toFixed(2)));//remember that it returns a String


//toLocaleString(locales, options):return a String in a Language sensitive representation.

const hundreds = 1000000;
console.log(hundreds.toLocaleString());//by default US system

console.log(hundreds.toLocaleString("en-IN"));//Indian Format

console.log(hundreds.toLocaleString("ar-EG"));//Arabic 

console.log(hundreds.toLocaleString("en-IN", {style:"currency", currency:"INR",maximumFractionDigits:3}));


//More on MDN docs...

//Math

console.log(Math.abs(-5));//5
console.log(Math.floor(12.4));
console.log(Math.ceil(4.6));
console.log(Math.round(17.5));
console.log(Math.sqrt(15));
console.log(Math.pow(2,3));
console.log(Math.min(4,8,15,28,1));
console.log(Math.max(4,8,17,84,47));
console.log(Math.random());//always gives random value between 0 to 1
console.log(Math.floor(Math.random()*100));//gives random value between 1 to 100



//IMPORTANT 
//Math.floor(Math.random() * (max - min + 1)) + min