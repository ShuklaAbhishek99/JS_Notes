class Animal {
    constructor(name) {
      this.name = Animal.capitalize(name)
    }
    walk() {
      alert("Animal " + this.name + " is walking")
    }
    //use of static to do some process but it is not available to access
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
  // console.log(j.capitalize("thisa")) // --- > this doesnt work