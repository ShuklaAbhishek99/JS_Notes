class Animal{
    constructor(name, color, limbs){
        this.name = name
        this.color = color
        this.limbs = limbs
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
}

class Monkey extends Animal{
    eat_banana(){
        console.log(this.name + " is eating")
    }
}

let ani = new Animal("Bruno", "white", 4)
let m = new Monkey("Chimp", "brown", 4)

ani.shout()
m.run()
m.eat_banana()
// ani.eat_banana()