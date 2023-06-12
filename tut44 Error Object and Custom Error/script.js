try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age > 180) {
        throw new ReferenceError("Invalid age")
    } 
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

// try {
//     console.log(abhishek)
//     throw new ReferenceError("abhishek is good")
// } catch (error) {
//     console.log(error.name) //name of error
//     console.log(error.message) // message of error
//     console.log(error.stack)
// }