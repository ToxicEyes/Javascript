/**
 * What is an Object?
 * -->Object is an Unordered collection of "key:value" pair.
 * -->one pair of key:value is called "Property".
 * -->"key" can be type of string and "value" can be anything like number,object,array,string....
 */


/**
 * One way to create an object is shown below:
 */

const mySymbol = "Dev's Symbol";

/**
 * 
 * We can also define our Object using const, but it will only prevent the re-assignemnt of whole
 * but we can still update existing properties of that object.
 */

let user = {
 name: "dev",
 "full name" : "Dev Anand Pathak",
 [mySymbol] : "mySymbol", 
 age: 18,
 email : "dev@google.com",
 maritalStatus: "Single",
 isLoggedIn: false,
 lastLoginDay: ["monday","saturday"]
}

/**
 * There are two ways to access and property of Object
 * 1.by using a dot(.)
 * 2.by using a Array like notation([""])
 */


console.log(user.email);
//another way (Array notation) : but in order to acces the value you have to pass key as string
console.log(user["email"]);

//if you have spaces in your "key" part,you have to acces it using array notation,dot(.) notation gives an error.
console.log(user['full name']);

//trying to access a property that does not exist will give an Undefined

console.log(user.maritalStatus);//undefined

//NOTE: **user."full name" is not possible**


/* Manipulating the Properties of an Object */

//modify existing value:
user.name = "radha";
console.log(user.name);


//deleting the property:
console.log(user.maritalStatus);
delete user.maritalStatus;
console.log(user.maritalStatus);

//checking if property exists
console.log("maritalStatus" in user);
console.log("full name" in user);

//Way to check wether an Object contains a specific property or not

console.log("has Property: ",user.hasOwnProperty('name'));


/**Interview Question: Use a symbol as key of object 
 * 
 * -How to create a Symbol?
 * const mySymbol = Symbol("Dev's Symbol"); //syntax
 * Symbol is defined abow in this code.
*/


//now we are triying to access it in a User Object
//in order to add Symbol as key we have to use the syntax below
//  [name_of_symbol] : "any_value" **
// user[name_of_symbol] **

console.log(user[mySymbol]);
console.log(user);


//we can also have nested objects

const regularUser = {
 email: "dev@exmaple.com",
 fullName: {
  userFullname:{
   firstName: "dev",
   lastName: "pathak"
  }
 }
}


console.log(regularUser.fullName.userFullname.firstName);

/**
 * 
 * Object.assign(target, source1, source2 , ..., sourceN);
 * This static property copies enumerable properties from one or more source objects to target object
 * 
 * */

//target is modified by sources **

const target = {1: "a", 2: "b"};
const source = {3: "c", 4: "d"};

const combinedObject = Object.assign(target, source);

console.log(combinedObject);


console.log(combinedObject === target);

console.log(target);

//in case you dont want to update the target, you can pass an empty object.

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

const obj4 = Object.assign({},obj1, obj2, obj3);

console.log(obj4);//Here We are not modifying any existing objects.


/** 
 * Here Object.keys(obj) returns an array of keys and
 * Object.values(obj) returns an array of values.
 * Object.entries(obj) return an array of arrays which contains key:value pair in terms of an array.
 */