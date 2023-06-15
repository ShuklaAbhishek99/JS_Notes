// let arr = [3, 5]
// let a = arr[0]
// let b = arr[1]
// console.log(a, b)

// Now we can do above code with destructuring assignment like this
// can takes less or equal values than the size but not less size than the size of arr
let arr = [3, 5, 23, 53, 3331, 6, 9, 21]
// let [a, b] = arr

// we can print rest values like this
// let [a, b, ...rest] = arr
// console.log(a, b, rest)


// let [a, , , , ...rest] = arr
// console.log(a, rest)


const obj = {
    a: 1,
    b: 2
}

// const {a, b} = obj
const { a, b } = { a: 1, b: 2 }

// console.log(obj)


// Spread Operator
let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }

console.log(obj1)

function sum(v1, v2, v3) {
    return v1 + v2 + v3
}

let nums = [1, 2, 7]
console.log(sum(...nums))

let x = "the"
let y = "no"
const z = { x, y } //object
console.log(z)


// more examples
let obj2 = {
    name: "Harry",
    company: "Company xyz",
    address: "XYZ"
}

console.log({ ...obj2, name: "John", company: "ABC" })
// console.log({ name: "John", company: "ABC", ...obj2 }) // This will print the obj2 object without changing any values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax