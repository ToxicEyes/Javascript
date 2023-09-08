/**
 * 
 *strict mode: Having different sematics compared to normal code
 --Objective: throw an error on silent errors of JS.
 --Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
 --Prohibits some syntax likely to be defined in future versions of ECMAScript.


 reverse of Strict mode (non-strict mode) is called sloppy mode.

 NOTE: It doesn't apply to block statements enclosed in {} braces; attempting to apply it to such contexts does nothing.

  eval code, Function code, event handler attributes, strings passed to setTimeout(), and related functions are either function bodies or entire scripts, and invoking strict mode in them works as expected.

  The "use strict" directive can only be applied to the body of functions with simple parameters. Using "use strict" in functions with rest, default, or destructured parameters is a syntax error.
 */


 /**
  * this keyword:
  * -In other programming languages, this keyword is used to represent the curret instance of the class.
  * -But in JS this keyword is having different behavior.
  * -It behaves differentely in strict and non-strict mode.
  * -It is also having different behavior in global scope and function scope(local scope)
  * -It is directly associated with Contexts.
  */


 //in global scope this is equivalent to  window object.
 // console.log(this === window); //true
 //works with browser

 const user = {
  name: "dev",
  age: 18,
  welcomeMessage: function() {
   console.log(`${this.name} , welcome to Chai aur Code JS Playlist!`)
  }
 }

 // console.log(user.welcomeMessage());
 // console.log(user);
 // user.name = "Alex";
 // console.log(user);

 console.log(this);
 //in global scope this refers to an empty context (object)

 //NOTE: in browser, in global context this refers to window object
 //but in IDE it refers to empty context


 //NOTE: this keyword cant work with fuctions. **
 // function dev(){
 //  let uanme = "dev";
 //  console.log(this.uname);
 // }

 //IN arrow functions this is having same behavior as normal functions

 const dev = () => {

  let uname = "dev";
  console.log(this); //points to global context which is {}
  console.log(this.uname);//same as normal function, gives undefined
 }
 
 dev();
 