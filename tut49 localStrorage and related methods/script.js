let key = prompt("Enter key")
let value = prompt("Enter value")

// 1.setItem - sets the key value
localStorage.setItem(key, value)

// 2.getItem - gets the value by key
console.log(localStorage.getItem("shukla"))

// 3.remove the key with its value, takes key
// localStorage.removeItem("mauj")

// 4.deletes everything
// localStorage.clear()

// 5.get the key on a given position, takes index
// localStorage.key(index)

// 6.the number of stored items
console.log(localStorage.length)