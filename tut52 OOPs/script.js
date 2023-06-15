let a = {
    name: "abhishek",
    language: "JavaScript",
    run: ()=>{
        alert("self run")
    }
}

console.log(a.name)

let prototype_obj = {
    run: ()=>{
        alert("run")
    }
}

prototype_obj.__proto__ = {
    name1: "Larry" 
}

// above is 3 chain of prototyping

// if there was no function("run") in object it will look in prototype otherwise a.run() will be fired first
a.__proto__ = prototype_obj //setting prototype to object, a's prototype
a.run()
console.log(a.name1)