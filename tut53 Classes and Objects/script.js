class Railway_form{
    //method
    submit(){
        alert( this.name + ": Form Submitted for train number " + this.train_number)
    }

    cancel(){
        alert(this.name + ": This form is cancelled")
    }
    
    fill(name, train_number){
        this.name = name
        this.train_number = train_number
    }
}

let Abhishek = new Railway_form() // object initialization/creation
Abhishek.fill("Abhishek Shukla", 13414)
let Rohan = new Railway_form()
Rohan.fill("Rohan", 12111)
console.log(Abhishek.name)

Abhishek.submit()
Rohan.submit()
Rohan.cancel()