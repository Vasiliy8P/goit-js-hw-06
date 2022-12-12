const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value) {
        alert("Всі поля повинні бути заповнені");
    } else {
        const submitObj = {
            email: email.value,
            password: password.value,
        };
        console.log(submitObj);
        event.currentTarget.reset()
    }    
}
