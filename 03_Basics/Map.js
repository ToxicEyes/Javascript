//Map datastructure in Javascript.

/**
 * Map is also an object, but its an advance version of object.
 * Map maintains order of insertion of properties, but in objects there is no guarantee that order of properties will be maintained.
 * Map only contains i=unique properties.
 * Performance of an Map is better than Object.
 * Map has more features which are not available in Object
 * In object the keys only can be type of 'String' but in Map it can be any type 
 * ** we can apply forof and foreach loop on map but not forin
 * console.log(typeof myMap) --> Object*/

const user = {
 email: 'dev @gmial.com',
 true: {
  fname: "dev",
  lname: "pathak"
 }
}

// Object.keys(user).forEach((prop)=> {
//  console.log(prop, typeof prop);
// })

let myMap = new Map([
 ["name", "dev"],
 [true, "this is a string value assigned to a bool key"]
]);

myKeys = myMap.keys();



//setting the properties, new values and existing values
myMap.set("city", "ahmedabad");
myMap.set("name", "Alex");//name changes from dev to Alex

// console.log(myMap)
// console.log(myMap.get("city"));

// console.log(myMap.values());
console.log(typeof myMap.entries());
// console.log(myMap.has("address"));
// console.log(myMap.delete("city"));
// myMap.forEach(prop => {
//  console.log(prop);
// })

console.log(myMap)

//First key and then value is printed. This is different from forEach loop
for(const [key,value] of myMap){
 console.log(key, ":", value);
}

for([a,b] of myMap){
 console.log(a, ":", b);
}

//first value if printed and then key(defualt behavior) ** only in forEach loop
// myMap.forEach((v,k)=>{
//  console.log(v,k);
// })

//Since Objects are not iterable, Maps are also not iterable. ***



/** 
 * All methods of Map:
 * -set([key, value]) : to update existing value and add a new value 
 * -get(key): to get the value from the map
 * -keys(): this method returns an Object of keys
 * -values(): this method return an Object of values
 * -entries(): this method returns an Object filled with all key, value pair of Map
 * -has():return true/false, used to check whether required property exists in Map or not
 * -forEach(): we can apply forEach loop on Map*/ 




