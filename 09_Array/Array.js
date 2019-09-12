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

// Eliminar elementos duplicados de un array
new Set(numbers) /*Pero esto es un objeto*/

// Para convertir el objeto en un array usamos el spread operator (...) para no tener que recorrer el objeto
/*El spread operator lo que hace es sacar todos los valores del objeto y trabajarlos por separado */
console.log([ ...new Set(numbers) ]) // al colocarlo entre los corchetes generan un array

// Haremos una función para que nos devuelva un array sin duplicados
const removeDuplicates = arr => [ ...new Set(arr) ]
miVector = [1, 2, 1, 0, 0]
console.log(removeDuplicates(miVector))

// Objeto Math con arrays
Math.max(...miVector)
Math.min(...miVector)

// Recorrer un array
for( let element of miVector){
    console.log(element)
}

// forEach()
/* Lo usamos cuando queremos agregarle una función a cada elemento 
recibe un callback con dos parametros elemento y el indice, tambien podemos recibir un tercer parametro que es el array
*/

miVector.forEach( (el, i, arr) => {
    console.log('Elemento: '+el) // se accede al elemento
    console.log('Indice: '+i) // indice
} )

let arr3 = []

miVector.forEach(el => {
    arr3.push(el * el)
})
console.log(arr3)

// .some(callback) every(callback)
/*Si alguno de los elementos o todos elementos cumplen con una condición */
miVector.some( el => el === 1) // devuelve true o false
console.log(arr2.every(el => el.includes('a')))

// .map(callback) 
/*Transforma todos los elementos del array 
- crea un nuevo array
*/
let newArray = miVector.map( el => el * el )
console.log('Función con .map(): ' + newArray)

// .filter(callback)
/*Filtra los elementos que cumplan con la condición 
-Crea un nuevo array
*/
let otherArray = miVector.filter( el => el === 0)
console.log('Función con .filter(): ' + otherArray)

// .reduce(callback)
/* Reduce todos los elemtnos a un único valor 
-Necesita comparar de dos a dos
*/
let sum = miVector.reduce( (a,b) => a + b )

