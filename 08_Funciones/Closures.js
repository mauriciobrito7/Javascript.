// Son como a traves de funciones internas podemos llegar a valores externos

function aumentar () { 
    let numero = 0
    return function(){
        numero++
        console.log(numero)
    }
}

aumentar()()

const incrementar = aumentar()

incrementar()
incrementar()

