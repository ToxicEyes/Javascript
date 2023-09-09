console.log("Hello, API");

const fetch_btn = document.getElementById("fetch_data");

//fetching data from api
fetch_btn.addEventListener('click', () => {
const profileName = document.getElementById("input_text").value;

let requestUrl = `https://api.github.com/users/${profileName}`;

var xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);

xhr.onreadystatechange = function() {
 var data = JSON.parse(this.responseText);
 console.log(typeof(data));
 if(xhr.readyState === 4) {
  console.log(data);
 }
 //name, email, company, followers
 var {avatar_url,login,twitter_username,location,followers} = data;
 printData(avatar_url,login,twitter_username,location,followers);
}
xhr.send();
});


function printData(avatar_url,login,twitter_username,location,followers){
  let pImage = document.getElementById("pImage");
  let pName = document.getElementById('pName');
  let pTwitter = document.getElementById('pTwitter');
  let pLocation = document.getElementById('pLocation');
  let pFollowers = document.getElementById('pFollowers');


  pImage.setAttribute('src',avatar_url);
  pName.textContent = login;
  pTwitter.textContent = twitter_username;
  pLocation.textContent = location;
  pFollowers.textContent = followers;

  console.log(pImage.getAttribute('src'));
  console.log(pName, pTwitter, pLocation, pFollowers);
  
}

