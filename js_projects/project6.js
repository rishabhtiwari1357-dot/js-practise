const insert = document.getElementById('insert');

window.addEventListener('keydown', function (event) {
  insert.innerHtML = `
  <div class="color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${event.key === ' ' ? 'Space' : e.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>

</table>
  </div>
  `;
});
