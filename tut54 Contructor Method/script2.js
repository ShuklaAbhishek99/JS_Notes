class Railway_forms {
    constructor(givenname, train_number, address) {
        console.log("Contructor called for " + givenname + " train number " + train_number)
        this.name = givenname
        this.train_number = train_number
        this.address = address
    }
    preview(){
        console.log(this.name + ": Form Submitted for train number " + this.train_number + " for address " + this.address)
    }
    submit() {
        console.log(this.name + ": Form Submitted for train number " + this.train_number)
    }

    cancel() {
        console.log(this.name + ": This form is cancelled")
        this.train_number = 0
    }
}

let Abhishek_form = new Railway_forms("Abhishek", 12331, "420, Prem gali, Roop Mahal - 100001")

Abhishek_form.preview()