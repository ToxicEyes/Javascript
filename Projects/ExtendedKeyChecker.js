console.log("Extended Key Checker Project");

let inputArea = document.getElementById("inputArea");
let area = document.getElementById("area");

inputArea.addEventListener('keydown', function (e){
 let text = 
 "key: "+(e.key === " " ? "Space" : e.key) + " keyCode: "+ e.keyCode + " Code: "+ e.code + (e.shiftKey ? ' ShiftKey': "") + (e.ctrlKey ? 'Ctrl' : "") +(e.metaKey ? ' Meta' : "")+(e.altKey ? ' Alt' : "") + (e.repeat ? " (repeat)" : "");

 //OR

 // let text = 
 // "key: "+e.key + " Code: "+ e.code + (e.shiftKey ? ' ShiftKey': "") + (e.ctrlKey ? ' Ctrl' : "") +(e.metaKey ? ' Meta' : "")+(e.altKey ? ' Alt' : "") + (e.repeat ? " (repeat)" : "");

 area.textContent += text + "\n";
});

document.getElementById('clearBtn').addEventListener('click', function(){
 area.textContent = "";
})

