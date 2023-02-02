'use strict';

// theme change logic

// elements

const toggleSwitch = document.getElementById('theme-toggle');

const bodyEl = document.getElementById('body');

const titleEl = document.getElementById('title');

const paraEl = document.getElementById('para');

const outPutScreenEl = document.getElementById('display');

const btnBg = document.querySelector('.button-container');

const buttons = document.querySelectorAll('.btns');

const delBtn = document.getElementById('del-btn');

const reset = document.getElementById('reset');

const equal = document.getElementById('equal');

const ErrorEl = document.getElementById('error');

console.log(ErrorEl);

// event listeners

toggleSwitch.addEventListener('change', function () {
  console.log(`hiii`);

  bodyEl.classList.toggle('violet-bg');
  bodyEl.classList.toggle('blue-bg');

  titleEl.classList.toggle('blue-h');
  titleEl.classList.toggle('violet-h');
  ErrorEl.classList.toggle('violet-error');
  ErrorEl.classList.toggle('blue-error');

  paraEl.classList.toggle('violet-p');
  paraEl.classList.toggle('blue-p');
  outPutScreenEl.classList.toggle('violet-c');
  outPutScreenEl.classList.toggle('blue-c');

  btnBg.classList.toggle('blue-d');
  btnBg.classList.toggle('violet-d');

  delBtn.classList.toggle('blue-delbtn');
  delBtn.classList.toggle('violet-del');
  equal.classList.toggle('violet-eq-btn');
  equal.classList.toggle('blue-eq-btn');

  reset.classList.toggle('blue-re-btn');
  reset.classList.toggle('violet-re-btn ');

  buttons.forEach((button) => {
    button.classList.toggle('blue-btn');
  });
});
console.log(equal);

// calculating function

function display(num) {
  outPutScreenEl.value += num;
  ErrorEl.style.display = 'none';
}

function calculate() {
  if (outPutScreenEl.value === '') {
    ErrorEl.style.display = 'block';
  } else {
    try {
      outPutScreenEl.value = eval(outPutScreenEl.value);
    } catch (error) {
      ErrorEl.style.display = 'block';
    }
  }
}

function resets() {
  outPutScreenEl.value = null;
  ErrorEl.style.display = 'none';
}

function del() {
  outPutScreenEl.value = outPutScreenEl.value.slice(0, -1);
  // ErrorEl.style.display = 'none';
}
