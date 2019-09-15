
// Prototipos
/*
-Es la base de toda la programación
-Ya que todo es un objeto, a la vez todo debe partir de un prototipo
*/

// this (scope)
/*
A partir de ES6 el alcance del this se limita al objeto declarado
De una forma global, el this sería igual a window
*/

// Objeto Literal

const clienteMau = {
    nombre : 'Mauricio',
    apellido : 'Brito',
    email : 'mau@gmail.com',
    pass : 'jashdfasdjkasd'
}

// Sintaxis punto
console.log(clienteMau)

// Sintaxis corchetes
let nombreCliente = clienteMau['nombre']

let na = 'nom'
let me = 'bre' 

/*Los atributos se convierten en variables */
const tabla = {
    [`${na}${me}`] : 'Mauricio'
}

console.log(tabla)

// Cliente Gym
const clienteGym = {
    nombre: 'Mauricio',
    edad: 24,
    altura: 175,
    peso:73,
    fechaRegistro: '22/02/2017'
}

const clienteGym2 = {
    nombre: 'Mauricio',
    edad: 24,
    altura: 175,
    peso:73,
    fechaRegistro: '22/02/2017'
}

const clientes = [clienteGym, clienteGym2]