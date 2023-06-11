let promise1 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("Promise is fulfilled")
        // resolve can take any value or datatype, it just returns it when the promise is fulfilled
        resolve(true)
    }, 3000);
})


let promise2 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("Promise is rejected")
        // reject can take any value or datatype, it just returns it when the promise is rejected
        reject(new Error("Caught an error"))
    }, 3000);
})


// to get result/value
promise1.then((value) => {
    console.log(value)
})

// to catch error
// promise2.catch((error) => {
//     console.log("Some error occured in p2")
// })

// promise2.then((value)=>{
//     console.log(value)
// })

// if resolved then get value else catch error
promise2.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log("Some error occured in p2")
});


console.log(promise1, promise2)// both can run parallely without any additon of time    