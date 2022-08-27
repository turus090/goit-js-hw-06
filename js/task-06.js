// const inputField = document.getElementById('validation-input');

// let symbols = '';

// function inputHandler(event) {
//     symbols = event.target.value;
//     console.log(symbols);
// }

// function onBlurHandler() {
//     if (symbols.length === +inputField.dataset.length) {
//         inputField.className = 'invalid';
//     } else {
//         inputField.className = 'valid';
//     }
// }

// inputField.addEventListener('input', inputHandler);
// inputField.addEventListener('blur', onBlurHandler);

// let inputEl = document.querySelector('#validation-input');

// let inputLength = inputEl.dataset.length;

// const input = document.querySelector('input');
// inputEl.addEventListener('change', e => {
//   const text = e.target.value;

//   if (text.length === +inputLength) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.remove('valid');
//     inputEl.classList.add('invalid');
//   }
// });

const inputRef = document.querySelector('input[data-length="6"]');
inputRef.addEventListener('blur', onBlurGetInputValue);

function onBlurGetInputValue({ target }) {
  if (target.value.length == inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}