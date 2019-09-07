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