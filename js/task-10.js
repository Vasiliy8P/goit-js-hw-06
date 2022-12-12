const controlsEl = document.querySelector('#controls input');
const buttonCreateEl = document.querySelector('button[data-create]')
const buttonDestroyEl = document.querySelector('button[data-destroy]')
const boxesEl = document.querySelector('#boxes')

buttonCreateEl.addEventListener('click', onElementCreate);
buttonDestroyEl.addEventListener('click', onElementDestroy)

function onElementCreate(event) {
  createBoxes(controlsEl.value);  
}
 
function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let elements = `<div style="background-color: ${getRandomHexColor()};  display: flex;" width="${width}" height="${height}"> </div>`;
  
  for (let i = 1; i < amount; i += 1) {
    elements += `<div style="background-color: ${getRandomHexColor()}; display: flex;" width="${width += 10}" height="${height += 10}"> </div>`;
  }
  boxesEl.insertAdjacentHTML('beforeend', elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onElementDestroy(event) {
  destroyBoxes()
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  controlsEl.value = '';
}