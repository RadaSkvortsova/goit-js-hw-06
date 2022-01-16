const incrementEl = document.querySelector("button[data-action='increment']");
const decrementEl = document.querySelector("button[data-action='decrement']");
const counter = document.querySelector('#value');
let counterValue = 0;
const onIncrement = () => {
    counter.textContent = counterValue += 1;
};
const onDecrement = () => {
    counter.textContent = counterValue -= 1;
};
incrementEl.addEventListener('click', onIncrement);
decrementEl.addEventListener('click', onDecrement);
