// Generate the random number, if user guess the correct number the program terminates
let x = Math.floor((Math.random() * 100) + 1);
console.log(x)

let user_input, count = 0;
do{
  user_input = prompt("Enter the Number")
  user_input = Number.parseInt(user_input)
  
  if(user_input>x){
    console.log("Number is greater")
  }
  else{
    console.log("Number is smaller")
  }
  count++;
}while(user_input != x)

let ans = 100-count
console.log(`You score is ${ans}`)