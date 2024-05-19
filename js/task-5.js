function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; //функція для генерування випадкового кольору
}
//знаходимо кнопку і додаємо спостерігача який при кліку буде визивати функцію
const changeRbgBtn = document.querySelector('.change-color');
changeRbgBtn.addEventListener('click', changeRbg);

function changeRbg() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor; //змінюємо колір фону на новий колір
  document.querySelector('.color').textContent = newColor; //змінюємо текстовий вміст елемента на новий колір
}
