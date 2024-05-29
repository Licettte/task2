const btn = document.getElementById('btn');

let scrollPosition;
window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;
})

const smoothScroll = () => {
    if (scrollPosition > 0){
        btn.style.display = 'none';
    }

    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(setDisplayBlock, 1000);
}

const setDisplayBlock = () => {
    return btn.style.display = 'block'
}

btn.addEventListener('click', () => smoothScroll());
