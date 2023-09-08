/**
 * Q: What is Function Statement, Function Expression and Function Declaration
 * Q:What is First Class Function?
 * Q:What is Higher Order Function?
 * -Anonymous Function
 * -Named Function Expression
 * -Different between parameters and arguments
 * -Arrow Functions 
 * 
 * NOTE: funtion statement and function declaration are same. :)
 */

console.log("Hello,Functions!");

//function statement OR Function declaration: a function declared as shown below is called function statement

function a() {
 console.log("function a called");
}
// a();


//function expression: a function stored in a variable is called function expression

var b = function() {
 console.log("function b called");
}
// b();

//Q: what is the diiference between function statement and function expression
//ans: The difference between two is Hoisting
//Hoisting means moving the scope of variables and function on the top,even before its declaration
//when you execute a function stored in variable, even before declaring it, it throws an error saying b is not defined.
//In case of function statement, it will print the function

//Anonymous function : a function without any name is called Anonymous function

//if we declare a function without any name and without storing it anywhere then error will be thrown
// function(){

// }

var c = function() {
 console.log("function c called");
}
// c();

//Named Function expression: a named function stored in a variable is called Named Function expression.

var d = function greet(){
 console.log("Hello, Dev");
 console.log(greet);
}
d();

//Gotcha: when you call function greet(), it will throw an error, saying xyz is not defined.But you can call this function inside it

// greet();//error

console.log(typeof d);

/**
 * First Class Functions:
 * It is verys simple.
 * -In javascript functions are treated as Variables.
 * We can pass a function to a function as an argument
 * We can return a function and we can assign a function to a variable, thats why they are called first class functions.
 * 
 * 
 */