class Employee{
    //method
    login(){
        console.log(`Employee has logged in`)
    }

    logout(){
        console.log(`Employee has logged out`)
    }
    
    request_leaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
    request_coffee(x){
        console.log(`Employee has requested ${x} Coffee`)
    }
    request_leaves(leaves){
        // using "super" uses all code in parent's method, it is not overriding
        super.request_leaves(leaves) //calling parent's request_leaves
        console.log(`One extra is granted`)
    }
}

let e = new Programmer()
e.login()
e.request_leaves(3)