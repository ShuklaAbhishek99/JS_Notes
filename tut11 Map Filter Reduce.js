let arr = [2, 23, 43, 67, 1223]

// arr.forEach((value, index, array)=>{
//     //code
// })

// Array Map Method, map creates a new array by performing same operations on each array
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value+1
})
//we can do the same with forEach
//we use ForEach when we want to do some operations to same array, while map is used to make a new array
console.log(a)


// Array Filter Method, filter creates a new array, and return filtered value
let arr2 = [2, 23, 143, 67, 7]
let a2 = arr2.filter((value)=>{
    return value<10 //return values which is less than 10
})

console.log(a2, arr2)


// Array Reduce Method, reduces an array into single value
let arr3 = [1, 2, 3, 4, 5]
// reduce(prev_val, curr_val, curr_index)
// let new_arr3 =  arr3.reduce((h1, h2)=>{
//     return h1 + h2
// })

//we can also do this way
const reduce_func = (h1, h2)=>{
    return h1 + h2
}

let new_arr3 =  arr3.reduce(reduce_func)

console.log(new_arr3)
