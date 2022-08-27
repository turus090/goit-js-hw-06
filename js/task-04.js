const buttons = document.getElementsByTagName('button');
const decrementBtn = buttons[0];
const incrementBtn = buttons[1];

const counterDisplay = document.getElementById('value');
console.dir(counterDisplay);
let counterValue = 0;

decrementBtn.addEventListener(
    'click', () => counterAction(decrementBtn.dataset),
);

incrementBtn.addEventListener(
    'click', () => counterAction(incrementBtn.dataset),
);

function counterAction(dataset) {
    if (dataset.action === 'decrement') {
        counterValue--;
    } else if (dataset.action === 'increment') {
        counterValue++;
    }

    counterDisplay.innerHTML = counterValue;
}