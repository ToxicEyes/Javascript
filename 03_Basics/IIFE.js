//IIFE : Immediately Invoked Function Expression **

/**
 * Syntax:
 * 
(function functionName() {
 // function logic
})();


To create the IIFE, we first create the function declaration: functionName(). Then, once the function is defined, we:

Wrap parentheses around it. This creates the function expression
Add a second pair of parentheses at the end to immediately invoke it
 */

(function getConnectedToDB() {
  console.log("DB Connected");
 }
)();


//we can also pass asguments to this IIFE functions

(function(a,b){
 console.log(a+b);
})(3,4);

const counter = (function(){
 let count = 0;

 return function(){
  count = count + 1;
  return count;
 }
})();

console.log(counter());

console.log(counter());

//always add a semicolon after ending th IIFE, otherwise error will be thrown.
/**
 * ConclusionL:
 * -IIFE's are good way to hide the data from the global scope.
 * -IIFE creates a Private scope which is hidden from global scope.
 * -JavaScript which helps us to avoid duplicate variables and functions in the global scope as IIFE keeps these variables and functions private in its own scope.
 * -IFE to avoid overwriting variables and functions in the global scope and keep their scope to IIFE in Javascript.
 * 
 * 
 * Real life usecases:
 * -IIFEs can also be used to create private variables. These variables are useful in cases where you may need to prevent accidental modifications or changes to important values
 * -IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function.
-Avoid polluting the global namespace 
-To create closures
-Avoid conflict of variable names between libraries and programs.
-IIFE is used to create private and  public variables and methods
-It is used to execute the async and await function
-It is used in JQuery Library
-It is used to work with require function
 */