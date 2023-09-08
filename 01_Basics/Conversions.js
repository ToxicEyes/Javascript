//Conversion of Numbers

let a = "17dev";
let b = null 
/*
true-> to number -> 1
false-> to number ->0
null->to number -> 0
NaN -> to number -> NaN
NOTE:type of NaN is a Number ;)
undefined -> to number -> NaN
string which contains a number will be easily converted to Number like "17" to 17
any string which cant be converted to number will give NaN.
*/ 
// console.log(typeof a);


// let valueToNumber = Number(b);
// console.log(typeof valueToNumber);
// console.log(valueToNumber);


//Conversion to boolean values
let isLoggedIn = 17;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/**
 * In case of empty string "" -> false
 * In case of non-empty string -> true
 * NaN -> false
 * null -> false
 * undefined -> false
 * 0 -> false
 * 1 -> true or any value greater than 0 -> true
 * 
 */


//In case of String


let someNumber = 17;
let numberToString = String(someNumber);

// console.log(typeof numberToString);
// console.log(numberToString);


// ******************************** Stack (Primitive) and Heap (Non-Primitive) ********************************

let myName = "Dev";
//since above value is primitive, it is assigned a memory in Stack

let anotherName = myName;
anotherName = "Radha";
//now,when I assign this, a copy of myName is created 
//which is assigned a memory in stack.So if we chnage anothername -> original value is not modified .

console.log(myName);
console.log(anotherName);

let user = {
 email: "user@google.com",
 upi: "user@yyu"
}