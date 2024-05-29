const _url = 'https://currency-exchange.p.rapidapi.com/exchange'
const headers = {
    'x-rapidapi-key': '9b22d0ae08mshc40fd4d0d0f4364p170e2ajsn418a62d34a25',
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com'
}

//TODO вынести в константы
const paramsUSD = {
    from: 'USD',
    to: 'RUB'
}
const paramsEUR = {
    from: 'EUR',
    to: 'RUB'
}
const paramsSGD = {
    from: 'SGD',
    to: 'RUB'
}
const paramsMYR = {
    from: 'MYR',
    to: 'RUB'
}
const paramsCAD = {
    from: 'CAD',
    to: 'RUB'
}
const paramsJPY = {
    from: 'JPY',
    to: 'RUB'
}

const getCurrency = (params) => {
    return axios.get(_url, {params: params, headers: headers});
}

const promise1 = getCurrency(paramsUSD);
const promise2 = getCurrency(paramsEUR);
const promise3 = getCurrency(paramsSGD);
const promise4 = getCurrency(paramsMYR);
const promise5 = getCurrency(paramsCAD);
const promise6 = getCurrency(paramsJPY);

function fetchData() {
    Promise.all([promise1, promise2, promise3, promise4, promise5, promise6]).then(function (values) {
        console.log(values);
    });
}

fetchData()
const minutes15 = 15000000
setInterval(fetchData, minutes15)
