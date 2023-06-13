const Create_todo = async(todo)=>{
    let options = {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        // body: JSON.stringify({ //=>convert a json object to string
        //     title: 'Abhishek',
        //     body: 'shukla',
        //     userId: 1004,
        //   }),
        body: JSON.stringify(todo),
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)

    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async()=>{
    let todo = {
        title: 'Abhishek3',
        body: 'shukla2',
        userId: 1004,
    }
    let todos = await Create_todo(todo)
    console.log(todos)
    console.log(await getTodo(5))
}

mainFunc()
