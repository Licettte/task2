const _url = 'https://currency-exchange.p.rapidapi.com/exchange'
const _key = '9b22d0ae08mshc40fd4d0d0f4364p170e2ajsn418a62d34a25'
const headers = {
    'x-rapidapi-key': _key,
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com'
}

//TODO вынести в константы

const RUB = 'RUB'
const USD = 'USD'
const EUR = 'EUR'
const SGD = 'SGD'
const MYR = 'MYR'
const CAD = 'CAD'
const JPY = 'JPY'

const USDtoRUB = {
    from: USD,
    to: RUB
}
const EURtoRUB = {
    from: EUR,
    to: RUB
}
const SGDtoRUB = {
    from: SGD,
    to: RUB
}
const MYRtoRUB = {
    from: MYR,
    to: RUB
}
const CADtoRUB = {
    from: CAD,
    to: RUB
}
const JPYtoRUB = {
    from: JPY,
    to: RUB
}

const getCurrency = (params) => {
    return axios.get(_url, {params: params, headers: headers});
}

const promise1 = getCurrency(USDtoRUB);
const promise2 = getCurrency(EURtoRUB);
const promise3 = getCurrency(SGDtoRUB);
const promise4 = getCurrency(MYRtoRUB);
const promise5 = getCurrency(CADtoRUB);
const promise6 = getCurrency(JPYtoRUB);

function fetchData() {
    Promise.all([promise1, promise2, promise3, promise4, promise5, promise6]).then(function (values) {
        renderData(values)
    });
}

function renderData(values) {
    let arrayCurrency = ['USD', 'EUR', 'SGD', 'MYR', 'CAD', 'JPY'];

    values.map((currency, index) => {
            let li = document.createElement("li");
            document.getElementById("currency").appendChild(li);
            let elem = document.getElementsByTagName('li');
            elem[index].innerHTML = arrayCurrency[index] + ': ' + currency.data.toFixed(2)
        }
    )
}

fetchData()

const getCurrentData = () => {
    const todayDate = new Date();
    const dd = String(todayDate.getDate()).padStart(2, '0');
    const mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = todayDate.getFullYear()
    return mm + '.' + dd + '.' + yyyy;
}
const updateDate = () => {
    document.getElementById("currency__update-date").append(getCurrentData())
}

updateDate()

const minutes15 = 15000000
const hours12 = 1000 * 43.200

setInterval(fetchData, minutes15)
setInterval(updateDate, hours12)
