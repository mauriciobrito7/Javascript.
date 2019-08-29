// Propiedades
let name = 'Mauricio'

console.log(name.lenght) // lenght devuelve el tamaño de la cadena

// Métodos
name.trim() // quita los espacios adelante y al final
name.toUpperCase() // transforma toda la cadena en mayúsculas
name.toLowerCase() // transforma toda la cadena en minusculas

// Preguntamos en que posición está un caracter
name.indexOf('a',2) // si no encuentra el caracter devuelve -1 y el segundo parametro indica el número de ocurrencia que se busca en este caso la segunda vez que aparece
name.lastIndexOf('i') // encuentra la ultima ocurrencia

// Pregunta si el texto incluye cierta cadena de texto
name.includes('mau') // devuelve un boolean
// Pregunta si comienza con determinado texto
name.startsWith('mauri')
// Pregunta si termina con determinado texto
name.endsWith('cio')

// Manipular strings

name.replace('ricio', 'cicio') // reemplaza un texto por otro

// Separa un texto según el texto que pongamos entre los parentesis
name.split('u')[0] // entre corchetes el indice de las palabras que quiero obtener
name.split('') // para dividir entre todos los caracteres

name.substring(4) // cuenta desde el indice 4 y extrae todo el texto
name.substr(2,5) // el primer valor es el indice y el segundo cuantos caracteres va a extraer


