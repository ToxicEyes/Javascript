/*
Strings and useful methods of it
*/

const string = "The revolution will not be televised";
console.log(string);

//Either you use single quote or double quote,just be consistent with one

const sql = 'Single quoted String';
console.log(sql);

const dqs = "Double quoted String";
console.log(dqs);

//cant use different quotes in same string
// const errorString = 'I'am Dev Pathak';//this will give an error
const errorString = "I'm dev pathak";//this will work
console.log(errorString);

/*Escaping in String: '\ or "\*/

// '\ or "\ to escape

// \" or \' to create single or double quote respectively

let escapeString = 'Escaping String Example: I"\ am dev pathak';
console.log(escapeString);

escapeString = "Escsping String Example: I'\ am dev pathak";
console.log(escapeString);

escapeString = 'Creating double quote:I\" am dev pathak';
console.log(escapeString);

escapeString = "Creating single quote:I\' am Dev Pathak";
console.log(escapeString);

/*String Concetanation */


// console.log("Hello, my name is "+"Dev");

const MyName = "Dev";
const MyAge = 21;

console.log(`Hello,it's me ${MyName}`);//use back-ticks

const one = "Hello";
const two = "How are You ?"
const joined = `${one} ${MyName},${two}`;
console.log(joined);


//during concetanation  number if also coverted to string
console.log(typeof (MyAge + MyName));


const test = Number("123");
console.log(typeof test);