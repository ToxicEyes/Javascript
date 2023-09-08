let user = {
  email: "dev@example.com",
  fullName: {
    fname: "dev",
    lname: "pathak",
  },
};

/**
 * Optional Chaining: is an operator used with objects and functions.
 * when you try to acces any object or function using this operator and if it evaluates undefined or null, then the expression is short-circuits and return undefined instead of throwing an error.
 * 
 * Optional Chaining can be used with objects, functions and also with arrays.
 */

/**
 * Syntax:
obj?.prop       // optional static property access
obj?.[expr]     // optional dynamic property access
func?.(...args) // optional function or method call
 */

//example:code below throws an error
// try{
//  console.log(user.fullName.userfullname.fname);//upto userfullname it will not throw an error but after that it will throw an error.
// }catch(e){
//  console.log(e);
// }

// The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.this operator is used when there is a probability that reference might be missing.

//instead of throwing error, code below will return undefined.
console.log(user?.fullName?.userFullName); //undefined
//The object property before ? is checked whether it's null or not.**

//Another Example:

const person = {};

console.log(person.address?.houseNo); //undefined


/**Optional Chaining + Nullish Coalescing(Coalescing:  combining togather to form one mass or whole)
 * combination of ?. and ??
 * if items which is on the left hand side of ?? is nullish then item to the right hand side of ?? is returned
 * Example: 
 * const data = obj?.prop ?? "fallback string";
 * const data = obj?.prop?.func() ?? fallbackFunc();
 */

console.log(person.address??"fallBack String");

//Link: https://www.freecodecamp.org/news/javascript-optional-chaining/