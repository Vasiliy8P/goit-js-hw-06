const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onOutputChange);

function onOutputChange(event) {
    nameOutputEl.textContent = event.currentTarget.value;
}
