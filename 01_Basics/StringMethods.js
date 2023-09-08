//NOTE: String are immutable
//Negetive indexing in JS is not possible but we can mimic it using Proxies.

let MyName = "     Dev AnandPathak     ";

//another way to create a string is

const newName = new String("Dev Anand Pathak");

//counting for string length starts from 1
console.log("Length of String is: ",MyName.length);//gives length of string,spaces are also included


// The trim() method removes whitespace from both sides of a string
let trimmedString = MyName.trim();
console.log(`Original string is: ${MyName}`);
console.log(`Trimmed String: ${trimmedString} and it's length is: ${trimmedString.length}`);

//NOTE: trim() only removes spaces from start and end of the string and retruns a new string
//spaces between string is not removed

//trimStart(): removes spaces only from starting of the string
let test_string = "     Hello,Javascript";
trimmedString = test_string.trimStart();
console.log(`Original String : ${test_string} and it's length: ${test_string.length}`);
console.log(`Trimmed String: ${trimmedString} and it's length: ${trimmedString.length}`);


//trimEnd() method works like trim(), but removes whitespace only from the end of a string.
test_string = "     Hello,Javascript     ";
console.log(`Original String : ${test_string} and it's length: ${test_string.length}`);
trimmedString = test_string.trimEnd();
console.log(`Trimmed String: ${trimmedString} and it's length: ${trimmedString.length}`);


//toUpperCase() : coverts string to uppercase

test_string = "dev pathak";
let upperString = test_string.toUpperCase();
console.log(`Original String : ${test_string} and new String : ${upperString}`);

//toLowerCase() : converts string to lowercase
test_string = "DEV PATHAK";
let lowerString = test_string.toLowerCase();
console.log(`Original String: ${test_string} and new String : ${lowerString}`);



//slice(start_index,end_index): slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// let test_string = "Dev Anand Pathak";
console.log(test_string.slice(0,9));
console.log(test_string.slice(3,));
console.log(test_string.slice(-7,));


//substring(start_index,end_index):substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let fruits = "Apple, Banana, Mango";
console.log(fruits.substring(7,13));
console.log(fruits.substring(13,));

//substr(start_index,length_of_required_substring):substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
console.log(fruits.substr(7, 6));
console.log(fruits.substr(15,));


/*

replace(content,content_tobe_replaced_with):The replace() method does not change the string it is called on.
 The replace() method returns a new string.
 The replace() method replaces only the first match 

*/

test_string = "I love Microsoft and Google";
let newString = test_string.replace('Microsoft','Amazon');
console.log(`Original String: ${test_string} and new String: ${newString}`);  

//charAt(index): it returns the character at specified position
console.log(test_string.charAt(8));

//indexOf(character): it return the position(index) of specified character

console.log(test_string.indexOf("L"));

//split(separator,limit) : return an Array of substrings separated by spefied separator
let splitString = "dev/anand/pathak";
console.log(splitString.split("/"));
