'use strict';

const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

function trimInputValue(value) {
  return value.trim();
}

function getDisplayText(value) {
  return value === '' ? 'Anonymous' : value;
}

function updateOutput(event) {
  const trimmedValue = trimInputValue(event.target.value);
  outputElem.textContent = getDisplayText(trimmedValue);
}

inputElem.addEventListener('input', updateOutput);
