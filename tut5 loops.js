let obj = {
    abhishek: 89,
    shukla: 69,
    abhi: 31,
    hello: 34
}

//for in loop iterates through the object, it takes keys
for (let a in obj){
    console.log(obj[a]);
}

//for of loop, of "object or array", it should be iterable otherwise this loop won't work
for (let b of "abhishek"){
    console.log(b);
}