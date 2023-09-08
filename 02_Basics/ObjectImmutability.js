
//creating object as literal
const user = {
 isAdmin: false
}

// console.log(user);

//Adding a new Property to Object

user["address"] = "Ahmedabad";//Added to user object
// console.log(user);

//Modifying a Property

user["name"] = "Ved Pathak";
// console.log(user);


/**
 * Another way to add a new property to object is by using the method called
 * Object.defineProperty(obj, props, descriptor)
 * 
 * params:
 * object: the object on which to define the property
 * props: A string or Symbol specifying the key of the property to be defined or modified.
 * descriptor:property being defined or modified
 */

// console.log(Object.isExtensible(user));

Object.defineProperty(user, 'cgpa', {
 enumerable: true,//otherwise it would not be added to the object as property.
 value: "9.0",
 writable: false
});

// console.log(user);


/**
 * There are 3 ways to make an object immutable
 * 1.using prevent extension
 * 2.using seal() method
 * 3. using freeze() method
 */

//1. Object.preventExtensions(obj):This property prevents extensions from being added into the object.We can still delete the properties and update existing properties.


// Object.preventExtensions(user);
// console.log("Is the Object is extensible:",Object.isExtensible(user));


// //code below will throw an error: Cannot define property lastName, object is not extensible
// try{
//  Object.defineProperty(user,"lastName",{
//   enumerable: true,
//   value: "Pathak"
//  })
//  // user.name = "Radha";//works
// }catch(error){
//  console.log(error);
// }

// console.log(user);


//2.Obejct.seal(obj): this methods prevents extention and also prevents manipulation of existing properties(Now you cant add a new property and cant update the existing properties)

// const test = {
//  name : "Radha",
//  age: 26
// }

// console.log(test);

// Object.seal(test);
// console.log(Object.isExtensible(test));//now object is not extensible

// try{
//  test.name = "dev",
//  delete test.age;//not allowed
//  test.address = "abad"//not allowed
// }catch(error){
//  console.log(error);
// }

// console.log(test);


//3.Object.freeze(obj): it returns an object with full immutability

console.log(user);
Object.freeze(user);

try{
 //nothing will work
 user.name = "dev",
 delete user.cgpa;
 user.address = "abad";
}catch(error){
 console.log(error);
}
console.log(user);
console.log(Object.isFrozen(user));

/**Note:
 * -freeze method works only at first level, means if we have nested objects,it will not work
 * -Arrays can be made inextensible using freeze method
 */


//deepFreezing an Object

const nestedObject = {
 email: "dev@example.com",
 fullName: {
  fname: "dev",
  lname: "pathak"
 }
}

console.log(nestedObject);
// Object.freeze(nestedObject);//no update,no delete and no addition of new property
// console.log(Object.keys(nestedObject));


//Link: https://www.30secondsofcode.org/js/s/deep-freeze/

const deepFreeze = (obj) => {
 Object.keys(obj).forEach(prop=>{
  if(typeof obj[prop] === 'object') deepFreeze(obj[prop]);
 });
 return Object.freeze(obj);
};

deepFreeze(nestedObject);

try{
 delete nestedObject.fullName.fname;
}catch(error){
 console.log(error);
}


console.log(nestedObject);



