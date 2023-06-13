console.log(document.cookie)
document.cookie = "name = abhishek"
document.cookie = "shukla = eee8rnfefef"
document.cookie = "hello = nfer3r3r3fef"
document.cookie = "name = bablu"

let key = prompt("Enter key")
let value = prompt("Enter value")

// document.cookie = `${key}=${value}`

// if we enter different symbol or letters in key or value it may not be able to display it
// so we use encodeURIComponent to solve this problem
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// you can also decode the content with decodeURIComponent
// decodeURIComponent("give key or value here")

console.log(document.cookie)

// document.cookie = "name = bablu; hello = 2"
// we can't set multiple cookies at a time, only first pair will be taken and other will be taken as option
// an option is optional which can be given or can be ignored