const inputPassword = document.querySelector('.password')
const form = document.querySelector('.contact__form');
const btnSubmit = document.querySelector('.btn__submit');
const passwordError = document.querySelector('.password__error');

const passwordRegex = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,8}$'
inputPassword.addEventListener('keyup', (e) => checkPassword(e));

let isValid = false;

const checkPassword = (e) => {
    e.target.value.match(passwordRegex) ? isValid = true : isValid = false
}

const submitPassword = (e) => {
    e.preventDefault();
    if (isValid) {
        inputPassword.classList.remove('error')
        passwordError.style.visibility = "hidden"
        inputPassword.classList.add('success')
    } else {
        inputPassword.classList.remove('success')
        inputPassword.classList.add('error')
        passwordError.style.visibility = "visible"
    }
}


btnSubmit.addEventListener('click', submitPassword)
