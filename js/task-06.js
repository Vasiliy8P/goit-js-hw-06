const validationInputEl = document.querySelector('#validation-input');
console.log("validationInputEl", validationInputEl)

validationInputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    if (event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
        validationInputEl.classList.add("invalid")
    } else {
        if (validationInputEl.classList.contains("invalid")) {
            validationInputEl.classList.replace("invalid", "valid")
        } else {
            validationInputEl.classList.add("valid");
        }
    }
}
