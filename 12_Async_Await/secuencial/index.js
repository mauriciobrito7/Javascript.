const { taskOne, taskTwo } = require('./tasks')

async function main() { 

    try {
        console.time('Measuring time') // para medir el tiempo que toma cierta función 
        /*const valueOne = await taskOne()
        const valueTwo = await taskTwo()*/ // forma secuencial
        
        // forma paralela
        const result = await Promise.all([taskOne(), taskTwo()]) //  vamos a tener un arreglo con todos los métodos que queremos ejecutar de manera paralela
        

        console.timeEnd('Measuring time') // para medir el tiempo que toma cierta función 
        console.log(result[0])
        console.log(result[1])

         // console.log(valueOne)
        // console.log(valueTwo )
    } catch (e) {
        console.log(e)
    }

}

main()
