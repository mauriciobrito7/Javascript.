// Promise
function requestHandler(req, res){
    User.findById(req.userId)
    /*Una promesa esta conformada por un método then() y un método catch para todos los errores */
        .then(user =>{
            return Task.findById(user.tasksId) // Operación asincrona
        })
        .then(tasks =>{
            tasks.completed = true
            return tasks.save() // función que toma tiempo es decir que se debe hacer de manera asincrona
        })
        .then( () =>{
            res.send('Task completed')
        })
        .catch(errors  => {
            res.send(errors)
        })
}