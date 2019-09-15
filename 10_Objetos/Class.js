class Usuario {
    constructor(nombre, apellido, correo, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.edad = edad
    }

    // Métodos
    saludar() {
        return console.log(`Hola, mi nombre es ${this.nombre}`) // para poder ser reutilizados deben retornar valores
    }

    cambiarEdad(nuevaEdad){
        this.edad = nuevaEdad
    }

    // Interactuar con el DOM
    saludarDOM() {
        return document.write(`
            <div>
                <p>
                Hola, mi nombre es ${this.nombre}
                </p>
            </div>
        `)
    }
}

let mauricio = new Usuario('Mauricio', 'Brito', 'mau@gmail.com', 24)

console.log(mauricio)
mauricio.saludar()
mauricio.cambiarEdad(25)
console.log(mauricio)

// Herencia
class Administrador extends Usuario{
    constructor(nombre, apellido, correo, edad,experiencia, lenguaje){

        super(nombre, apellido, correo, edad) // estoy invocando la función constructura de la clase padre

        this.experiencia = experiencia
        this.lenguaje = lenguaje
    }
}

let jose = new Administrador(
    'Jose',
    'Brito',
    'jose@gmail.com',
    54,
    5,
    'Javascript'
)

console.log(jose)
jose.saludar() // Método del padre