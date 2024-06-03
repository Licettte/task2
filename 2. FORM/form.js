const inputPassword = document.querySelector('.password')
const form = document.querySelector('.contact__form');
const btnSubmit = document.querySelector('.btn__submit');
const passwordError = document.querySelector('.password__error');

const passwordRegex = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,8}$'
inputPassword.addEventListener('keyup', (e) => checkPassword(e));

const checkPassword = (e) => {
    let isValid;
    e.target.value.match(passwordRegex) ? isValid = true :  isValid = false
    submitPassword(e, isValid)
}

const submitPassword = (e, isValid) => {

    console.log(isValid, "isValid")
    e.preventDefault();
     isValid ?
        inputPassword.classList.add('success')

        :
        inputPassword.classList.add('error')
    passwordError.style.visibility="visible"

}

btnSubmit.addEventListener('click', submitPassword)
