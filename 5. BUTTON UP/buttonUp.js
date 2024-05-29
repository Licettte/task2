const btnUp = document.getElementById('btnUp');

let scrollPosition;
window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;
})

const smoothScroll = () => {
    if (scrollPosition > 0){
        btnUp.style.display = 'none';
    }

    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(setDisplayBlock, 1000);
}

const setDisplayBlock = () => {
    return btnUp.style.display = 'block'
}

btnUp.addEventListener('click', () => smoothScroll());
