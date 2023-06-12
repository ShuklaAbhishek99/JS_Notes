let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Value 1")
    }, 3000);
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Value 2")
    }, 5000);
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject(new Error("Error 3"))
    }, 2000);
})

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

// 1.Creating an array of all promises, when all values get resolved then it will be printed
// if any fails then all will be affected and results get ingored
// let promise_all = Promise.all([p1, p2, p3])

// 2.if any fails then it affect others, to resolve this we wiil use 
// let promise_all = Promise.allSettled([p1, p2, p3])

// 3.It will o/p any result which gets completed first, jo bhi pahle hoga wahi result me chala jayega
// it is just like a race, who finishes earlier gets printed in result
// let promise_all = Promise.race([p1, p2, p3] )

// 4.The above race also gives error it reaches earlier, or completes in lesser time
// To resolve this we will use "any" whichever gets resolved first will be printed
// let promise_all = Promise.any([p1, p2, p3])

// 5.Gives a resolved value
// let promise_all = Promise.resolve([p1, p2, p3])


// 6.Gives a rejected value
let promise_all = Promise.reject([p1, p2, p3])


promise_all.then((result)=>{
    console.log(result)
})