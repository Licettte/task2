const fruits = ["apple", "avocado", "Pear", "peach", "Plum", "eggplant", "pineapple"]
const container = document.getElementById('container')
const inputText = document.getElementById('search')
inputText.addEventListener('keyup', (e) => filter(e));

const renderArray = (array) => {
    array.map((fruit, index) => {
            let p = document.createElement("p");
            container.appendChild(p);
            let elem = document.getElementsByTagName('p');
            elem[index].innerHTML = fruit
        }
    )
}

renderArray(fruits)

const filter = (e) => {
    let array = (fruits.filter(element => element.includes(e.target.value)));
    renderFilterArray(array)
}

const deleteItems = () => {
    container.querySelectorAll('p')
        .forEach((fruit) => fruit.remove())
}
const renderFilterArray = (array) => {
    deleteItems()
    renderArray(array)
}
