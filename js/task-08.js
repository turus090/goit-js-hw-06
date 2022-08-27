const form = document.querySelector('.login-form');
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

let email = '';
let password = '';

function reset() {
    emailInput.value = '';
    passwordInput.value  = '';
}

function inputHandler(event) {
   if (this.name === 'email') {
    email = event.target.value;
   } else if (this.name === 'password') {
    password = event.target.value;
   }
};

function submitHandler(event) {
    event.preventDefault();

    if(email === '' || password === '') {
        return alert('Fill in all fields!');
    }
    const newUser = {
        email,
        password,
    }

    reset()
    console.log(newUser)
}

emailInput.addEventListener('input', inputHandler)
passwordInput.addEventListener('input', inputHandler)


form.addEventListener('submit', submitHandler)