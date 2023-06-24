// Synchronous Programming
// let a = prompt("What is your name?")
// let b = prompt("What is your city name?")
// let c = prompt("How old are you?")

// Asynchronous Programming
// console.log("Start")
// setTimeout(function(){
//     console.log("I am good")
// }, 3000)
// console.log("END")

// Callback function
// function loadScript(src, callback=>name of the function or passing a function)
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    // jab script (i.e. src loaded) load ho jayegi toh ye function run hoga
    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        callback(null, src);//calling outer function =>depends on which function we passed
    }
    // lets say the callback function faces error for onload then we can do this
    script.onerror = function(){
        // alert("Error Loading the script")
        console.log("Error Loading script with SRC: " + src);
        callback(new Error("Src got some error"));//calling outer function =>depends on which function we passed
    }
    document.body.appendChild(script);
}

function hello(error, src){
    if (error) {
        console.log(error)
        return
    }
    alert("Hello World! " + src)
}

function GoodEvening(error, src){
    if (error) {
        console.log(error)
        return
    }
    alert("Good Evening! " + src)
}


// ------------------------------ Program starts Here ------------------------------------
// so which function does callback should call? It is given when the function call is made
loadScript(
    "https://cdn.jsdelivr.ne/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
    // GoodEvening
    hello
    // can pass any function
);
