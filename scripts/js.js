const button = document.querySelector('.hotel-button');
const modal = document.querySelector('.modal-container');
const cross = document.querySelector('.modal-close-button');

const page = document.querySelector('.page-wrapper');

page.classList.remove('no-js');

button.addEventListener('click', function (evt) {
  modal.classList.add('modal-container_open')
})

cross.addEventListener('click', function (evt) {
  modal.classList.remove('modal-container_open')
})
