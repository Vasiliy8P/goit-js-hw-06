const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onOutputChange);

function onOutputChange(event) {
    event.currentTarget.value
        ? (nameOutputEl.textContent = event.currentTarget.value)
        : (nameOutputEl.textContent = "Anonymous");
}
