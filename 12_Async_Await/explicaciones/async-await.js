/*La palabra clave llamada await lo que esta tratando decir que el código  que continua va a llevar tiempo y podemos guardar la respuesta */
/* Await solo esta disponible en las funciones que tienen una plabra clave llamada async al inicio*/

async function requestHandler(req, res) { 
   
    try{
        const user = await User.findById(req.userId)
        const tasks =  await tasks.findById(user.tasksId)
        tasks.completed = true
        await tasks.save()
        res.send('Task Completed')
    }
    catch(e){
        res.send(e)
    }
    
}