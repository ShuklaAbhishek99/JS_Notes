let promise = new Promise(function(resolve, reject){
    console.log("alert inside promise")
    resolve(45)
})

console.log("hello!")

setTimeout(function(){
    console.log("inside timeout")
}, 1000);

console.log("this is 3rd o/p")

console.log(promise)

// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api 
// Fetch pictures from the server 
// Print downloading 
// Rest of the script 