let age = prompt('Dime tu edad')
//Operador Ternario
let isAdult = age >= 18 ? 'Eres mayor de edad' : 'Aun eres un niño'

alert(isAdult)

//Operador de corto circuito
/*Si el primer valor es verdadero se queda con el primer valor pero si es falso pasa al segundo */
let a //udefined
let b = a || 'Juan' // va a ser Juan porque 'a' es false

let c = null || 25 // va a ser 25, el null podría ser una función

/*Si el primer valor es falso se queda con el si es verdadero busca el siguiente asi el segundo sea verdadero*/
let e = null && a // va a ser null


