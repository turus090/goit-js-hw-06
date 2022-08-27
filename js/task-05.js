const inputField = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

let userName = '';

function inputHandler (event) {
    if(event.target.value === '') {
        nameOutput.innerHTML = 'Anonymous';
    } else {
        userName = event.target.value
        nameOutput.innerHTML = userName;
     }
}

inputField.addEventListener('input', (event) => inputHandler(event))