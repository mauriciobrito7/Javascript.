/*Representan al objeto del cuan se ejecuta la función
Las arrow functions permiten acceder al this superior dentro de un closure (lexical this)
*/
let user = {
    nombre: 'Mauricio',
    edad: 54,
    getEdad() {
        console.log(this.edad)
    }

}

user.getEdad()