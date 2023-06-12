let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // alert("I am not resolved")
        resolve(1)
    }, 2000);

})

p1.then(()=>{
    console.log("This promise is resolved")
})

p1.then(()=>{
    console.log("Hueyy")
})