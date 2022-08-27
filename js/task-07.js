const rangeInput = document.getElementById('font-size-control');
const spanElement = document.getElementById('text');

console.dir(spanElement)

function inputHandler(event) {
    console.log(event.target.value);
    spanElement.style.fontSize = event.target.value + 'px';
};

rangeInput.addEventListener('input', inputHandler);