// Declarar una función
function saludar(genero,persona) { 
    return genero === 'm'
    ? `Hola bienvenido ${persona}` 
    : `Hola bienvenida ${persona}` 
}
// funcion flecha
const saludar2 = (genero, persona) => {
    return genero === 'm'
    ? `Hola bienvenido ${persona}` 
    : `Hola bienvenida ${persona}` 
}

console.log(saludar('f','Maria'))
console.log(saludar2('m','Mauricio'))

const sumar = (a,b) => a + b

console.log(sumar(1,4))

// Parámetros 
/*Son variables locales que se definen enla declaración de la función  (se pueden asignar valores por defecto a los parámetros)*/
const saludar3 = (genero = 'm', persona = 'visitante') => {
    return genero === 'm'
    ? `Hola bienvenido ${persona}` 
    : `Hola bienvenida ${persona}` 
}
// Argumentos
/*Valores asignados a los parámetros al ejecutar la función
- Si hay más argumentos que párametros, los adicionales se ignoran
- Si hay menos argumentos que parámetros 
-- los faltantes son undefined
-- a menos que tengan un valor por defecto
*/
console.log(saludar3('f','maria'))

// Parámetros rest (spread operator)
/*Nos permite mandar cualquier cantidad de argumentos */
const sumarTodos = (...numeros) => {
    let sumaNumeros = 0
    console.log(numeros) // [1,2,3,4]
    numeros.forEach( num =>{
         sumaNumeros += num
    })
    console.log(sumaNumeros)
}

sumarTodos(1,2,3,4)

// Las funciones son ciudadanos de primera clase
/* 
- Pueden ser almacenadas en variables o constantes (función por expresión)
- Puede ser pasadas como argumentos de otra función (callbacks)
- Pueden ser retornadas por otra función (closures)
- Pueden tener métodos o propiedades (POO)
*/

// Ser almacenda en variables
const c = console.log
const multiplicar = (a,b) => a * b
c(multiplicar(3,4))

let edad = multiplicar(5,4)
c(edad)

// Ser retornadas por otra función
function sumar2(x) {
    return function(y){
        return x * y
    }
}

const sumar3 = x => y => x + y

c(sumar2(5)(2))
c(sumar3(10)(20))

const doSomething = x => y => x * y
const a = doSomething(2)(3)
const b = doSomething(3)

console.log(doSomething(a)(b(3)))

// Tipos de funciones

/* Funciones puras
No causa un efecto secundario, y siempre devuelve los mismos parámetros
*/
let s = 'Hola'
const saludos = (saludo, persona) => `${saludo} ${persona}`

c(saludos(s,'Luis'))
c(s)

// Funciones autoinvocadas
const saludos2 = ((saludo, persona) => `${saludo} ${persona}`)(s,'Mauricio')
c(saludos2)

//Función anonimas
setTimeout(() =>{
    console.log('Hola Mau')
}, 3000)

