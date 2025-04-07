console.log(`all is working fine`);
const key = document.querySelector('.key') ;
console.log(key);

window.addEventListener('keydown', (e) => {
    key.innerHTML = 
    `<table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table> `

})


// key keyCode code 