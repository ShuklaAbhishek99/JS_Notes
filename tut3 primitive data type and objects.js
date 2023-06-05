//There are 7 types to primitive data types
// NNSSBBU

let a = null; //null
let b = 232; //number
let c = "Abhishek"; //string
let d = Symbol("I am a symbol"); //symbol
let e = true; //bool
let f = BigInt("33113113"); //bifint
let g = undefined; //undefined
// let g; -->this is also valid

console.log(a, b, c, d, e, f, g);
console.log(typeof g);

// Object in js(non-primitive data type)
const item = {
    name: "Abhishek",
    phone_number: 123456789,
    marks: 90
}

// console.log(item["name"]);

// item = 45;
item["friend"] = "shukla"
item["name"] = "hello"
console.log(item)
console.log(item["name"])
console.log(item.name)

//we cant store a number, string inside an object
//item is a reference to the object