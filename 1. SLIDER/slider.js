const _url = "https://jsonplaceholder.typicode.com/photos"
const container = document.getElementById('container')
const btnPrev = document.getElementById('arrowLeft')
const btnNext = document.getElementById('arrowRight')

let currentIndexSlider = 0
let arraySlider = []
const getData = (url) => {
    axios.get(url)
        .then((response) => {
            arraySlider = response.data.slice(0, 5)
            createElem(arraySlider)
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data.message)

            } else if (error.request) {
                console.log(error.request.message)
            }
            console.log(error)
        });
}

getData(_url)

const isDisabled = () => {
    btnPrev.disabled = currentIndexSlider === 0;
    btnNext.disabled = currentIndexSlider === arraySlider.length - 1;
}

const nextSlide = () => {
    currentIndexSlider++
    isDisabled();
    renderSlider(currentIndexSlider)
}
const prevSlide = () => {

    if (currentIndexSlider !== 0) {
        currentIndexSlider--
        renderSlider(currentIndexSlider)
    }
    isDisabled();
}

btnPrev.addEventListener('click', prevSlide)
btnNext.addEventListener('click', nextSlide)

const deleteElem = () => {
    container.querySelectorAll('.card')
        .forEach((card) => card.remove())
}

const createElem = (array) => {
    deleteElem()
    let slide = document.createElement("div");
    container.appendChild(slide);
    slide.className = `card`;
    slide.innerHTML = `
                        <img src="${array[currentIndexSlider].url}" >
                        <p>${array[currentIndexSlider].title}</p>
                    `;
    container.appendChild(slide);
}

const renderSlider = () => {
    deleteElem()
    createElem(arraySlider)
}
