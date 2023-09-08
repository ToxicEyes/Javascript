console.log("Keyboard Stroke Checker!!");

const insert = document.getElementById('insert');

window.addEventListener('keydown',function(e){
insert.innerHTML = `
<div id="table">
<table>
<thead>
 <tr>
   <th>key</th>
   <th>keyCode</th>
   <th>code</th>
 </tr>
 </thead>
 <tr>
   <td>${e.key === " " ? "Space" : e.key}</td>
   <td>${e.keyCode}</td>
   <td>${e.code}</td>
 </tr>
</table>
</div>
` });