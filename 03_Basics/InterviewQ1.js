//setTimeOut + Closures Interview questions.

/*function x() {
 let i = 10;
 setTimeout(function() {
  console.log(i);
 }, 3000);

 console.log("Namaste JS");
}
x();*/

//Time, Tide and JavaScript waits for none :)
/**
 * Whenever JS encounters a setTimeout, it stores the callBack function to a separate meomry location and attaches a times to it.
 * It will not wait for the timer to get expire and continue to next line.
 * Whenever the timer expires, the callback function is again pushed into the call stack and executed.
 */

/*function x() {
 for(let i = 1; i <= 5; i++) {
  setTimeout(function() {
   console.log(i);
  }, i*1000)
 }
}

x();*/

//here 5 copies of callBack function is created and stored in separate memory with attached timer.
//So for loop is executed before setTimeout's callBack function.
//Hence, in case of "var", value of i is 6. All 5 copies of "i" are pointing to 6.

//Solution:
//Use "let" because it's block scoped.
//It is always a new value of "i" in this case and copies of function forms a closure with value of "i"
//Thats how we can get desired output :)

/*function y() {
 for(var i = 1; i <= 5; i++){
  function closure(i){
   setTimeout(function() {
    console.log(i);
   },i*1000)
  }
  closure(i);
 }
}
y();*/

// function z() {
//   for (var i = 1; i <= 5; i++) {
//    setTimeout(function(i_local) { 
//     return function() { console.log(i_local); } 
//   }(i),i*1000);
// }
// }
// z();


//Q:Using Closure create a private counter

function counter() {
 //parent ec
 var count = 0;

 return {
  add: function(num) {
   //local ec
   return count = count + num;
  },
  result: function(){
   console.log('Curerent Value of counter is: ',count);
  }
 }
}

const c = counter();
console.log(c.add(2));
console.log(c.add(5));

//Q. what will be the op of this code

function outer() {

 var x = 10;
 
 function inner() {
 
 console.log(x);
 
 }
 
 return inner;
 
 }
 
 var innerFunc = outer();
 
 innerFunc();