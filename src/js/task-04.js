const buttonDecrementEl = document.querySelector('button[data-action="decrement"]')
const buttonIncrementEl = document.querySelector('button[data-action="increment"]')
const valueEl = document.querySelector('#value') 
let counterValue = 0;

// const handleClickDecrementValue = counterValue => counterValue -= 1;

buttonDecrementEl.addEventListener('click', (event) => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

buttonIncrementEl.addEventListener('click', (event) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});