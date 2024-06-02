const passwordRegex = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,8}$'


const inputText = document.querySelector('.contact__input')

inputText.addEventListener('keyup', (e) => checkPassword(e));

const checkPassword = (e) => {
    e.target.value.match(passwordRegex)?


        inputText.classList.add('success'): console.log("uuuuuuuuuu")

}
