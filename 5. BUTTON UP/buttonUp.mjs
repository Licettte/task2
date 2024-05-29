const btn = document.getElementById('btn');

let scrollPosition;

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;
})

const smoothScroll = () => {
    document.getElementById('btn').style.display = 'none';
    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(setDisplayBlock, 1000)
}

const setDisplayBlock = () => {
    if (scrollPosition === 0)
        return document.getElementById('btn').style.display = 'block'
}

btn.addEventListener('click', () => smoothScroll());
