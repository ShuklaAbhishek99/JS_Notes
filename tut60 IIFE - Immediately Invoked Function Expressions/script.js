let a = () => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 3000);
    })
}

// let f = async () => {
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)

//     // console.log(b, c, d)

// }


// IIFE of above code
(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)

    // console.log(b, c, d)
})()