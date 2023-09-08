//Higher Order Array Loops

// [{}, {}, {}]
// ["", "", ""]

// for of loop
/**
 * A for...of loop operates on the values sourced from an iterable one by one in sequential order.
 * for of loop is type of for loop, it is used to iterate iterable objects.
 * It iterates on a sequence of values sourced from itearable objects.
 * Iterable objects can be Array, Object Arguments, String, Map, user-defined iterables,Set, NodeList ...
 * 
 * Syntax:
 * for (const iterator of object(any iterable object)) {
 }
 */


//Iterating over an array
const arr = [1,2,3,4,5];

for (const num of arr) {
 // console.log(num);
}

//Iterating through a String
let myStr = "Dev Pathak";
for (const char of myStr) {
  // console.log(`Char in string is ${char}`);
 }


// Iterating over the arguments object
function foo() {
 for (const iterator of arguments) {
  // console.log(iterator);
 }
}

foo("dev",1,17,2.36);

//Iteratign through an object

const user = {
 email: "dev@example.com",

}
// You cant iterate through an Object ***
// for (const prop of user) {
//  console.log(prop);
// }

//forin loop:

/**
 * forin loop is similar to forof loop with some minor differences
 */

const test = {
 js: "JavaScript",
 py: "python",
 cpp: "C++",
 rb: "Ruby"
}

for (const key in test) {
 // console.log(key, test[key]);
}

//forin loop on arrays

const langs = ["javascript", "python", "ruby"];

for (const key in langs) {
 // console.log(langs[key]);
}

//for in on Maps
let myMap = new Map([
 ["name", "dev"],
 [true, "this is a string value assigned to a bool key"]
]);

for (const key in myMap) {
 // console.log(key);
}

//Most used loop for Arrays : ** forEach loop **

//NOTE: forEach loop is having all info about elements of array **
let myArr = ["python", "ruby", "JavaScript", "csharp", "java"];

//1.using function() in forEach
//since we have to pass a callback function, dont give it a name
myArr.forEach(function(key){
 // console.log(key);
})

//2.using arrow function in foreach loop
myArr.forEach( (item) => {
 // console.log(item);
})

//3.passing another function as callBack function in foreach loop
//remember to pass reference of function

function printItems(item) {
 // console.log(item);
}
myArr.forEach(printItems);

//4. forEach also have different info about array

myArr.forEach((item, index, arrr) => {
 // console.log(item, index  , arr);
})

//Suppose we are working with database, where values are coming in terms of array of objects


let myArrayofObj = [
 {
  language: 'javascript',
  languagefilename: 'js'
 },
 {
  language: 'java',
  languagefilename: 'java'
 },
 {
  language: 'python',
  languagefilename: 'py'
 }
]

//now I want to fetch languagefilename property from every object from an array

//this task is simplified using forEach loop

myArrayofObj.forEach( (item) => {
 console.log(item.languagefilename);
})