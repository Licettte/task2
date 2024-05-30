
const _url = "https://jsonplaceholder.typicode.com/photos"

    axios.get(_url)
    .then((response) => {
        console.log(response.data, "response.data" )
        return response.data;
    })
    .catch((error) => {
        if (error.response) {
            console.log(error.response.data.message)

        } else if (error.request) {
            console.log(error.request.message)
        }
        console.log(error)
    });
