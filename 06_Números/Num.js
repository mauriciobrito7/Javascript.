let number = 5

//toFixed
/* Especifica el número de decimales */
number.toFixed(2) // "5.00"
let number2  = 9078.8736218635
number.toFixed(3) // "9078.874"

//parseInt(string, 10) '10' para el sistema decimal
//parseInt(string,10)

/*Convertir texto a número */

let texto = '20'

let textToNumber  = parseInt(texto,10)

//NaN NOT A NUMBER

// Redondea hacia abajo
Math.floor(20.7) // 20 

//Redondea hacia arriba
Math.ceil(20.1) // 21

//Redondea según el valor
Math.round(20.5) // 21
Math.round(20.4) // 20

//Devuelve un número aleatorio entre 0 y 1
Math.random() * 10 // por 10 para que sea entre 1 y 10
Math.ceil(Math.random() * 50 ) 



