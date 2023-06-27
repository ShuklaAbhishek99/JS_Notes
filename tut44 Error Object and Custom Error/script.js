try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age > 100) {
        throw new ReferenceError("Invalid age")
    } 
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

try {
    console.log(abhishek)
    throw new ReferenceError("abhishek is good") //agar throw me kuch error aa jaye toh ye error bata dena
} catch (error) {
    console.log(error.name) //name of error
    console.log(error.message) // message of error
    console.log(error.stack)
}