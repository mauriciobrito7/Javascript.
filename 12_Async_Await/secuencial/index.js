const { taskOne, taskTwo } = require('./tasks')

async function main() { 

    try {
        console.time('Measuring time') // para medir el tiempo que toma cierta función 
        const valueOne = await taskOne()
        const valueTwo = await taskTwo() 
        console.timeEnd('Measuring time') // para medir el tiempo que toma cierta función 
        
        console.log(valueOne)
        console.log(valueTwo )
    } catch (e) {
        console.log(e)
    }

}

main()
