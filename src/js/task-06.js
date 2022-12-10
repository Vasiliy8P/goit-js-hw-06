const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    validationInputEl.value.length < validationInputEl.dataset.length
        ? validationInputEl.classList.add("invalid")
        : validationInputEl.classList.replace("invalid", "valid");
}
