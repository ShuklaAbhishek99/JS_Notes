//request headers, we can pass our headers

// let promise = fetch("https://goweather.herokuapp.com/weather/ny", {
//     headers: {
//         Authentication: 'secret'
//     }
// })

let promise = fetch("https://goweather.herokuapp.com/weather/ny")

// fetching is 2 stage process
// 1.An object of response class containing "status" & "ok", status is ok if its b/w 200-299
promise.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json() //response will be resolved in json format

    // we can only read and return 1 type of file not multiple
    // for ex, any one method will be used at a time
    // return response.text()
    // return response.formData()
    // return response.blob()
    // return response.arrayBuffer()
}).then((response) => {
    console.log(response)
})