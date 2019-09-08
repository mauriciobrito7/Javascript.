// Es el contexto en el que una variable existe

{
    let profesor = 'Mauricio'
    {
        console.log(profesor) // Mauricio
    }
}

console.log(profesor) // profesor is not defined

/* No se puede acceder a lo que esta dentro de un bloque pero si desde adentro se puede acceder lo que esta afuera */