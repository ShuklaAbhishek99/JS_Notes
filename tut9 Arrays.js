let marks = [1, 2, 4, 5, 6, 2, 54, 33];

console.log(marks)
console.log(marks.length)

//arrays are mutable
marks[5] = 76
console.log(marks)
console.log(marks.length)

//arrays are by default object, it is also a non-primitive
console.log(typeof marks)

//convert to string
let b = marks.toString();
console.log(b);

//joining arrays
let c = marks.join("-")
console.log(c);

//removes last element
marks.pop()
console.log(marks);

//adds a new element at the end
marks.push(77)
console.log(marks);

//removes first element and returns it
marks.shift()
console.log(marks);

//adds element to the beginning returns new array length
marks.unshift(88)
console.log(marks);

//arrays element gets deleted, after this execution length of array doesn't changes
delete marks[1];
console.log(marks);


// join arrays to the given array
let a2 = [4, 5, 7]
let a3 = [10, 12, 11]

let new_arr = marks.concat(a2, a3)
console.log(new_arr);

//sorts the array in alphabetically, modifies original array
new_arr.sort()
console.log(new_arr);

let compare = (a, b)=>{
    return a -b //descending order
    return b-a //ascending order
}
new_arr.sort(compare)


//splice can be used to add new items to an array, 
const numbers = [1, 2, 3, 4, 5]
numbers.splice(2, 1, 23, 24) //position, no of elements to be deleted from mentioned position, elements to be added
console.log(numbers)


//slices out a piece from an array, it creates a new array
const num = [1, 2, 3, 4]
num.slice(2) //[3,4], start from index
num.slice(1, 2) //[2, 3], start from index and end index, but last index won't be considered, [1, 2)


//reverses the source of the array
numbers.reverse()
console.log(numbers)
