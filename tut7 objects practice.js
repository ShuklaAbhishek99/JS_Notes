let marks = {
    harry: 90,
    shubham: 82,
    lovuish: 72,
    monika: 99
}

for (let i = 0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " +marks[Object.keys(marks)[i]])
}

console.log("\n")

//Object.keys(marks) returns keys(it makes it into an array), .length will give length of all


for (let key in marks){
    console.log("The marks of " + key + " is " + marks[key])
}