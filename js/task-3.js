'use strict';
//знаходимо улументи у DOM

const inputElem = document.querySelector('name-input');
const outputElem = document.querySelector('name-output');

// функція для обрізки пробілів
function trimInputValue(value) {
  return value.trim();
}

// функція для отримання тексту для відображення

function getDisplayText(value) {
  return value === '' ? 'Anonymous' : value; //якщо value є порожнім рядком функція повертає Аnonymous, в іншому випадку повертає саме значення value
}

// функція для оновлення тексту в елементі вводу

function updateOutput(event) {
  const trimmedValue = trimInputValue(event.target.value);
  outputElem.textContent = getDisplayText(trimmedValue);
}

//даємо доручення на обробку події

inputElem.addEventListener('input', updateOutput);
