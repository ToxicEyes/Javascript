//Not covering basics, only minute details


function sayMyName(userName = "User") {
 if(!userName){ //or if(userName === undefined)
  console.log("Please Enter Your Name!");
  return;
 }
 return `${userName} just logged in`;  
}

// console.log(sayMyName("dev"));
// console.log(sayMyName());//if we dont pass anything, it returns undefined
console.log(sayMyName());//we can have default value( in this case "User is default value")