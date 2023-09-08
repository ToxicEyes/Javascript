//var is function scoped (only accessible inside the function in which it is declared)
//let & const are block scoped (only accessible within th block in which they are declared)
//block is represented by {} . It is used to combine multiple lined of code togather
//block is used where JS is expecting a single line of code.

function x() {
  function y() {
    var a = 10; //function scoped
  }
  // console.log(a);//throws an error saying , a is not defined
}

x();

// console.log(a); //throw an error saying , a is not defined.


if(true){
 var z = 300;//accessible
 let y = 2000;//not accessible
 const x = 1000;//not accessible
}

// console.log(z);
// console.log(x, y);


(function(){
for(const i = 0; i < 5; i++){
 console.log(i);
}
console.log("Final i: ",i);
})();
