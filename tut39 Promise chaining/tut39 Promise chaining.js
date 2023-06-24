// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Promise resolved")
//         resolve(55)
//     }, 2000);
// })

// Promise Chaining
// p1.then((value)=>{
//     console.log(value)

//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("Promise2")
//         }, 2000);
//     })

//     return p2
// }).then((value)=>{
//     console.log(value)
//     console.log("We are done")
// }).then((value)=>{
//     return 2
// }).then((value)=>{
//     console.log("We are actually done now")
// })

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve(1)
        }
        script.onerror = () => {
            reject(0)
        }
    })
}


// let p1 = loadScript("http://127.0.0.1:5500/index.js")
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")

p1.then((value) => {
    console.log(value)
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
    console.log("Second script ready")
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script")
})