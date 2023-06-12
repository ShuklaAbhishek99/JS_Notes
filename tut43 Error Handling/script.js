setTimeout(() => {
    console.log("Hacking wifi.... Please wait...")
}, 1000)

try {
    // try...error synchronous function k saath use karna chahiye
    // console.log(rahul)
    // this will give error but gets handled, setTimeout handle ho jayega par uske andar error aa gaya toh alag baat hai
    // agar andar wale ko bhi handle karna hai to waha par bhi try...catch use karo
    setTimeout(() => {
        console.log(rahul)
    }, 100)
} catch (error) {
    // console.log(error)
    console.log("Oye fail ho gaya")
}


setTimeout(() => {
    console.log("Fetching username and password.... Please wait...")
}, 2000)

setTimeout(() => {
    console.log("Hacking Rahul's facebook id.... Please wait...")
}, 3000)

setTimeout(() => {
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait...")
}, 4000) 