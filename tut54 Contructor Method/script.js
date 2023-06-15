class Railway_form{
    constructor(givenname, train_number){
        console.log("Contructor called for " + givenname + " train number " + train_number)
        this.name = givenname
        this.train_number = train_number
    }
    submit(){
        console.log( this.name + ": Form Submitted for train number " + this.train_number)
    }

    cancel(){
        console.log(this.name + ": This form is cancelled")
    }
}

let Abhishek = new Railway_form("Abhishek Shukla", 13414) // object initialization/creation
let Rohan = new Railway_form("Rohan", 12111)
let Mohan = new Railway_form("Mohan", 12151)

// console.log(Abhishek.name)

Abhishek.submit()
Rohan.submit()
Mohan.submit()
Rohan.cancel()