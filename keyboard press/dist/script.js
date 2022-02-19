const keyBoard = document.querySelector('.keyboard');

window.onkeydown = (e) => {
    keyBoard.innerHTML = ` <div class="key">
    ${e.key !== " " ? e.key : 'space'}
    <small>event.key</small>
  </div>
  <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${e.code}
    <small>event.code</small>
  </div>`;
    document.body.style.background = '#686de0';
};