const inputPassword = document.querySelector('.password')
const form = document.querySelector('.contact__form');
const btnSubmit = document.querySelector('.btn__submit');
const passwordError = document.querySelector('.password__error');

const passwordRegex = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,8}$'
inputPassword.addEventListener('keyup', (e) => checkPassword(e));

let isValid = false;
let value = ''

const textErrorPassword = 'пароль должен содержать цифры, символы и буквы'
const lengthErrorPassword = 'пароль должен быть не менее 4 символов и не более 8'
const checkPassword = (e) => {
    value = e.target.value
    e.target.value.match(passwordRegex) ? isValid = true : isValid = false
}

const submitPassword = (e) => {
    e.preventDefault();
    if (isValid) {
        inputPassword.classList.remove('error')
        passwordError.style.visibility = "hidden"
        inputPassword.classList.add('success')
    } else {
        validateMessage()
        inputPassword.classList.remove('success')
        inputPassword.classList.add('error')
        passwordError.style.visibility = "visible"
    }
}

const validateMessage = () => {
    if (value.length < 4 || value.length > 8) {
        passwordError.innerHTML = lengthErrorPassword
    } else {
        passwordError.innerHTML = textErrorPassword
    }
}


btnSubmit.addEventListener('click', submitPassword)
