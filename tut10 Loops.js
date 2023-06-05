let num = [1, 23, 53, 5, 21, 3, 2]

// arr.forEach((value, index, array)=>{
//     //code
// })

//for each loop for array
num.forEach((element) => {
    console.log(element*element);
})


//array.from, this makes an array from the element provided
let person_name = "Abhishek"
let arr = Array.from(person_name) //deprecated (prohibit the use, as there may inbuilt keyword of the same name)
console.log(arr)


//for of loop, prints all the value of element
for(let i of num){
    console.log(i)
}

//for in loop, this is gives keys, which is index
for(let i in num){
    console.log(i)
    console.log(num[i])
}
