//Ternary Operator:
// it is short-hand version of if..else
// it takes 3 parameters
//1st--> the condition that should be checked
//2nd--> the expression that should be excuted when condition is truthy
//3rd--> the expression that should be excuted when condition is falsy

//Syntax: condition ? expression_Truthy : expression_Falsy

let age = 19;
let decison = age>=18 ? "Allowed to drink" : "Not allowed to drink";
console.log(decison);


//we can handle null values using ternary operator

const greet = (person) => {
 let user_name = person ? 'User' : 'Stranger';
 return `Welcome, ${user_name}`;
}

console.log(greet("dev"));
console.log(greet(null));


// or

const greeting = (person) => {
 let name = person ? person.name : "Stranger";
 return `Hello, ${name}`;
}

console.log(greeting({name: 'dev'}));
console.log(greeting(null));


//Conditional Chaining 

// function example() {
//  return condition1 ? value1
//    : condition2 ? value2
//    : condition3 ? value3
//    : value4;
// }


const getGrade = (marks) => {
 let grade = (marks >= 85) ? "A" : (marks >= 65 && marks < 75) ? "B" : (marks >=35 && marks < 65) ? "C" : "D";
 return `Your grade is ${grade}`;
}

console.log(getGrade(34));


//Number guessing game

let winning_number = 19;
let user_guess;


user_guess = Number(prompt("Guess a number between 1 to 30:"));
if(user_guess == 19) {
 console.log("Your guess is right!!");
}else{
 if(user_guess > 19) {
  console.log("Too high...");
 }else{
  console.log("Too low...");
 }
}

