const buttonChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

buttonChangeColorEl.addEventListener('click', onChangeColor)

function onChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

