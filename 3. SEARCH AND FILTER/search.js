const fruits = ["tomato", "apple", "grapes", "peach", "cucumber", "eggplant", "pineapple"]

fruits.map((fruit, index) => {
        let p = document.createElement("p");
        document.getElementById("search__list").appendChild(p);
        let elem = document.getElementsByTagName('p');
        elem[index].innerHTML = fruit
    }
)

const inputText = document.getElementById('search')

const filter = (e) => {
    e.target.value
}

inputText.addEventListener('keydown', (e) => filter(e));
