/*
    - Lista de valores separados por comas y encerrados entre corchetes
    - Acceder a elementos
    - Desestructuración
*/

// Desestructuración de arrays
let arr = ['Hola', 'amigos', 'de', 'Mauricio']

let [s1,s2,s3,s4] = arr
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)

// Agregar un valor al final
arr.push(5)
// Quitar  un valor en la posición por parametro que se le pase
arr.pop(5) 
 // Agregar al inicio
arr.unshift('nuevo')
console.log(arr)
// Quitar al inicio
arr.shift()
console.log(arr)

arr2 = ['Venezuela', 'Colombia', 'Mexico', 'Bolivia']
// Si  queremos añadir de forma personalizada usamos splice
arr2.splice(2,0, 'Chile', 'Ecuador') // el primer valor el indice donde se van agregar, el segundo el la cantidad de elementos que van a ser eliminados, los demás los elemento a agregar
arr2.splice(0,1)
console.log(arr2)

// Extrae un nuevo array no modificado utilizando las posiciones
arr2.slice(2,4) // no toma el ultimo valor y no modifica el vector

// CONVERTIR ARRAYS A STRINGS
let numbers = [8,2,50,4,6,45,300,3500,1000, 11] 
// .join()
console.log(numbers.join(' ')) // le pasamos un string con espacio para que lo separe por espacios

//UNIR ARRAYS
let numbers2 = [8,20,40,60]
// .concat()
console.log(numbers.concat(numbers2))

//Ordenar un array
// Colocarlo al reves

/*
.split() divide los string creando un array de los carácteres
*/

console.log('Hola mamá'.split('').reverse().join('')) // reverse() coloca al reves el array

// funcion para devolver cualquier cadena de texto al reves
const reverseText = string => string.split('').reverse().join('')

console.log(reverseText('Mauricio'))

// Ordenar un array
 let abc = ['B', 'A', 'Z', 'F']
 abc.sort()
 console.log(abc)  

 /*Pero sort() no sirve con los números al menos que  se le pase un callback*/
numbers.sort((a,b) => a - b) // ordenar de menor a mayor
console.log(numbers)
numbers.sort((a,b) => b - a) // ordenar de mayor a menor

// Encontrar la elementos en un array
numbers.indexOf(8) // Devuelve la posicion del valor que se esta buscando y si no la consigue devuelve -1

numbers.find( number => number > 100 ) // Devuelve la primera ocurrencia del valor mayor a 100  

numbers.findIndex( number => number > 100 ) // Devuelve el primera ocurrencia del indice del valor mayor a 100
