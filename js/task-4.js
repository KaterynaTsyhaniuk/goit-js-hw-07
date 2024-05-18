'use strict';
//знаходимо елемент з класом login-form і зберігаємо до змінної
const logInForm = document.querySelector('.login-form');

//додамо обробника подій для події submit до форми логіну.коли форма відправиться викличеться функція handleSubmit
logInForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); //метод зупиняє стандартну поведінку відправки форми (сторінка не перезавантаж)
  const form = event.target; //отримуємо форму яка викликає подію
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim(); //витягуємо значення поліввводу та видаляємо зайві пробіли

  if (email === '' || password === '') {
    //перевіряємо на наявність порожніх полів
    alert('All form fields must be filled in');
  } else {
    console.log({ email, password }); //виводимо інформацію
    form.reset(); //очищаємо форму
  }
}
