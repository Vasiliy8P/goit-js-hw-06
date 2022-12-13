const buttonChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

buttonChangeColorEl.addEventListener('click', onChangeColor)

function onChangeColor(event) {
  const velueBackgroundColor = getRandomHexColor()
  bodyEl.style.backgroundColor = velueBackgroundColor;
  spanColorEl.textContent = velueBackgroundColor;
}

function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

