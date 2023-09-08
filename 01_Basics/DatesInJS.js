const myDate = new Date();

// console.log(myDate);
// console.log(typeof myDate); //object
// console.log(myDate.toString());
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.toLocaleString());//best and readable with time // 25/8/2023 7:04:17 
// console.log(myDate.toLocaleDateString());//only gives date // 25/8/2023
// console.log(myDate.toLocaleTimeString());//only gives time // 7:05:13 pm
// console.log(myDate.toDateString());//similar to toLocaleDateString but date is represented in different format with Weekday.
// console.log(myDate.toISOString());


//Creating a custom date
//syntax: new Date(year, month (month starts from 0),date, hours, minutes, seconds, milliseconds);
// let customDate = new Date(2023, 11, 12);
// let customDate = new Date("2023-12-12");//In form of YYYY-MM-DD
let customDate = new Date("1-12-2023");//IN terms of MM-DD-YYYY
// console.log(customDate.toLocaleString());


//timestamps

let myTimeStamp = Date.now();
console.log(myTimeStamp);//gives time in milliseconds from Jan-1-1970 midnight


//sometimes this timestamps are difficult to compare
//to solve this we can divide it by 1000 as shown below

console.log(Math.floor(Date.now() / 1000));//smaller number, easy to compare