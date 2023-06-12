// if any error comes or not it will be executed
// if any error comes in try....catch only one will be executed
// if try and catch both got error then finally will be executed

const f = ()=>{
    try {
        let a = 0
        // console.log(ee)
        console.log("I am try")
        return
    } catch (error) {
        // console.log(ee)
        console.log("I am an error")
    } finally{
        console.log("I am finally")
        // console.log(pp)
        //close the file
        //exit the loop
        //write to log file
    }
}

f()
console.log("End")