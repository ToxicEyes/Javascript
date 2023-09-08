/*
 
 const,let and var 
 variable naming rules
  
 */


"use strict";

let lastName = "Pathak"; //camel case writing
let last_name = "Pathak"; //snake case writing



/* var  */ 
//var should be only used in code written for old browser
// only use var if you must support old browser
var firstName = "Dev";
console.log(firstName);

firstName = "Radha";
console.log(firstName);



/* const :

The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope

*/

//use const when your value should not be chnaged
//use const when type should not be changed (Arrays or Objects)
const age = 20;
console.log("My age is:",age);

age = age + 20;//this will also give an error


//if we try to change value of const then,we will get TypeError:assignment to const variable
// age = 21;
// console.log("new age: ",age);


//Block Scope Example
/*function x() {
 const a = 10;
 console.log("Inside function x const a: ",a);
}
x();*/

// console.log("Outside function x const a:",a);//undefined


/* let:

The let keyword was introduced in ES6 (2015)

Variables defined with let cannot be Redeclared

Variables defined with let must be Declared before use

Variables defined with let have 'Block Scope'(value of it can be only accessible in block in which its declared)

Block Scope: variable declared inside {}-->cant accessed outside {}

*/
//use let when we cant use const,means if we want to change value after assigning it
let MyName = "Dev";
console.log("Using let: ",MyName);

//changing value of let variable
MyName = "Radha";
console.log("Chnaged name in let variable: ",MyName);


//Block Scope Example
/*function x() {
 let a = 10;
 console.log("Inside function block x: ",a);
}
x();*/

 // console.log("Ouside function scope x:",a);//undefined





/*Variable naming rules: 
Names can contain letters, digits, underscores, and dollar signs. (A...Z,a...z,A_Z,$)
Names must begin with a letter.(Age,name,SaLaRy)
Names can also begin with $ and _ (but we will not use it in this tutorial).($age,$name,_name)
Names are case sensitive (y and Y are different variables).(Age and age is different)
Reserved words (like JavaScript keywords) cannot be used as names.(if,const... cant be used as variable name)
*/