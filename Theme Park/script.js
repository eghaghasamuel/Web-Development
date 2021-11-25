const popup = document.querySelector('.popup-wrapper');
const closeX = document.querySelector('.popup-close');
const form = document.querySelector('.booking-form');
const userName = document.querySelector('#name');

setTimeout(function () {
  popup.style.display = 'block';
}, 3000);

closeX.addEventListener('click', () => {
  popup.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(userName.value);
});
