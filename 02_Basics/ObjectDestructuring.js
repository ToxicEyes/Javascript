/**
 * Properties of objects can be accesse by using dot(.) operator or Array Notation([]).
 * But if we want to access multiple properties, this way is not suitable.
 * Object Destructuring is the method to access multiple properties at once.
 * we can assign these properties to variables and can access it easily.
 *
 * Syntax:
 * let {prop1: "var1", prop2: "var2", ... , propN: "varN"} = object
 *
 * NOTE: Object's Property name is always on the left , whether it's Object or Object Destructuring
 *
 * If you try to assign a property to a variable that doesn't exist using object destructuring,
 * you will get undefined.
 */

const emp = {
  id: 17,
  name: "dev",
  dept: "web",
  email: "dev@example.com",
};

const { name: empName, dept: department } = emp;

console.log(empName, department);

const { age } = emp;
console.log(age); //undefined

//destructuring in nested objects

const person = {
  name: "dev",
  dept: {
   id: 17,
   name: "Aryan",
   address: {
    street: "30 Wellington Square",
    city: "Chelsea"
   },
  },
};

//check whether the property you are trying to access is part of another object or not
//check until you reach to main Object.(In this case "person" is main object)
const {dept: {address}} = person;
const {dept : {address : {city}}} = person;

console.log(address, city);

//Small Details about Functions:

/**
 * When you create a Function and at that time you pass arguments.These arguments are called Parameters.
 * When you call a function and you pass arguments then it is called Arguments
 * 
 * example:
 * defining a function
 * function sayMyName(..Parameters){
 * ...
 * }
 * 
 * calling a function
 * sayMyName(..arguments);
 * 
 * 
 * -After returning a function you cant do anything.
 * 
 * example:
 * function(a,b){
 * let result = a + b;
 * return result;
 * 
 * console.log("Heloo");//unreachable code, beacause function has returned.
 * }
 */