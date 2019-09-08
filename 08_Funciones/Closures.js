// Son como a traves de funciones internas podemos llegar a valores externos

function aumentar () { 
    let numero = 0
    return function(){
        numero++
        console.log(numero)
    }
}

aumentar()() // 1
aumentar()() // 1

const incrementar = aumentar()

incrementar() //1
incrementar() //2

