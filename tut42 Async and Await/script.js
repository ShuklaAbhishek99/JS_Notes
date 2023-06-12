// we can make any function to async by adding "async keyword/"

// async function abhishek(){
//     return 7
// }

// abhishek().then((val)=>{
//     alert(val)
// })

async function abhishek(){
    let delhi_weather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("28 deg")
        }, 1000);
    })

    let Blr_weather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("20 deg")
        }, 5000);
    })

    // delhi_weather.then(alert)
    // Blr_weather.then(alert)

    // await use karne se sync ki tarah behave karega, jab tak "delhi_w" fulfill nahi hota aage nahi badhega
    console.log("Fetching delhi....")
    let delhi_w = await delhi_weather
    console.log("Fetched delhi " + delhi_w)
    console.log("Fetching Blr....")
    let Blr_w = await Blr_weather
    console.log("Fetched Blr " + Blr_w)
    return [delhi_w, Blr_w]
}


// console.log(abhishek())
// abhishek().then((value)=>{
//     console.log(value)
// })

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await abhishek()
    let b = await cherry()

}

main1()