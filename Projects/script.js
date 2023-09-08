const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const color = document.querySelector('#currentColor');
var randomColor = "#fff";

var interval;

startBtn.addEventListener('click', function(){
 interval = setInterval(function(){
  randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.textContent = `#${randomColor}`;
 },1000);
});

stopBtn.addEventListener('click',function(){
  clearInterval(interval);
  interval = null;//more better code.We are clearing its reference.
})

resetBtn.addEventListener('click',function(){
 document.body.style.backgroundColor = "#fff";
 clearInterval(interval);
 color.textContent = "WHITE";
})