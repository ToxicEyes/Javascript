//Here we are going from paeent to child
const parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children);//returns an HTMLCollection: Array like structure 

//HTMLCollection is not iterabel, means you cant apply array loops like forEach forof...
//but we can apply simple loops on it
// for(var i = 0; i < parent.children.length; i++){
//  console.log(parent.children[i].innerHTML);
// }

// console.log(parent.firstElementChild);//gives first child element of parent node
// console.log(parent.lastElementChild);//gives last child element of parent node


const dayOne = document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.parentNode);
// console.log(dayOne.nextElementSibling);//gives sibling of this element (Here, its tuesday)


const div = document.createElement("div");
div.className = "main";
console.log(div);

div.id = Math.round(Math.random() * 10);
div.setAttribute("title", "My generated title");
div.style.backgroundColor = "lime";
div.style.padding = "12px 24px";
div.style.marginTop = "12px";
div.style.color = "black";

// div.innerText = "Deeeeeeev";

//more optimized way
const myTextNode = document.createTextNode("Deeeeeeev");
div.appendChild(myTextNode);

//how to append this into out main document

document.body.appendChild(div);



