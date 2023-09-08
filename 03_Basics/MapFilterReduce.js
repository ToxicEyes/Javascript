//Problem with forEach loop is that it can't return anything.
//Example is shown below:
myLangs = ["Python", "JavaScript", "Ruby", "Java", "C++"];

const langValues = myLangs.forEach( (item) => {
 // console.log(item);
 return item;
});

// console.log(langValues); //gives undefined

//Hence, forEach loop cant return anything.


/**
 * Map, Filter and Reduce in JS:
 * -Map, Filter and Reduce are array methods in JavaScript.
 * -It iterated over an array and performs some transformation or operation.
 * -Each method returns an array based on results.
 */


/**
 * 1.filter(): filter method is used on arrays.
 * -filter method accepts an callBack methods and it returns an array as output.
 * -it is used to apply some conditional statements over an array elements.
 */

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let evenNums = myNums.filter( (num) => num%2 == 0);
// console.log(evenNums);
// console.log(typeof evenNums);
//remember: -** Arrays are objects in javascript **-


let myObj = [
 {name: "dev", grade: 96},
 {name: "Aryan", grade: 99},
 {name: "Ishika", grade: 92}
]

const toppers = myObj.filter( (prop) => prop.grade > 93);
// console.log(toppers);
// console.log(typeof toppers);


//Practice on Filter

const books = [
 { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
 { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
 { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
 { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
 { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
 { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
 { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
 { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
 { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (book) => {
 return book.genre === 'Non-Fiction';
})

// console.log(userBooks);

userBooks = books.filter( (book) => {
 return book.genre === 'History' && book.publish >= 1995;
})

// console.log(userBooks);


/**
 * 2.map(): map method is similar to forEach loop upto some extent
 * map() method iterates over an array elements and calls the callBack funcgtion on each element
 * Main difference between map() anf forEach() is that, forEach method doesn't return anything,
 * but map() method returns an array.
 * Another difference is , forEach method is usually used to iterate over an array, but map() method is used to iterate over an array and it also applies the callBack function on each element.
 */

let newNums = myNums.map( (num) => {
 return num + 10;
});

// console.log(newNums);
// console.log(typeof newNums);

//chaining of map,filter,reduce

evenNums = myNums.map( (num) => {return num + 10}).filter( (num) => { return num % 2 == 0});
console.log(evenNums);


/**
 * 3.reduce(): syntectically complex :)
 * -The reduce() method reduces an array of values down to just one value. To get the output value,  it runs a reducer function on each element of the array.
 * 
 * The callback argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.

accumulator - the returned value of the previous iteration
currentValue - the current item in the array
index - the index of the current item
array - the original array on which reduce was called
The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.
 */

myNums = [1,2,3,4,5];
let totalSum = myNums.reduce( function(acc, currval) {
 console.log(`Acc: ${acc} and currVal: ${currval}`);
 return acc + currval;
},0 /**Initial value, acc is loaded with this initial value */)

console.log(totalSum);