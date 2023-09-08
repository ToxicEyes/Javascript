/**
 * Data Types in js:
 * 1.undefined
 * 2.Null
 * 3.Boolean
 * 4.BigInt
 * 5.Number
 * 6.String
 * 7.Symbol 
 */

console.log("Operators in Javascript:");

//Arithmetic Operators:

let a = 10;
let b = 10;

console.log("a+b: ",a+b);
console.log("a-b: ",a-b);
console.log("a*b: ",a*b);
console.log("a/b: ",a/b);
console.log("a%b: ",a%b);
console.log("a^b:",a**b);
console.log("Increment: ",++a);
console.log("Decrement: ",--b);

//Assignment operators: =,+=,-=,*=,/=,**=,%=

//Comparison Operators: >,>=,<,<=,==(Equals),!=(Not Equals),===(Equal and same type)
// !==(not equal value or not same tyep), ?(ternary)

console.log(`${typeof a} and ${typeof b}`);
console.log("a == b",a===b);//true




//logical operators : &&(Logical and) , || (logical or), !(logical not)





/*
Truthy Values:
 value that is considered as true when encountered in Boolean context

 example: true,"0","false",Infinity,-Infinity,-3.14 ...

 Falsy Values:
 value that is considered as false when encountered in Boolean context

 example: false, 0 ,null, NaN, -0 ,""(Empty String),undefined...

*/