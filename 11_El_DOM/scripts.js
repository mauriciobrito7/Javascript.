// document es el objeto global

let selection = document.getSelection().toString() // Devuelve lo que ha seleccionado un usuario

//Selecionar nodos
const title = document.getElementById('title')
title.style.background = 'yellow'

const title2 = document.querySelector('#title')

const listItems = document.querySelectorAll('ul li') // devuelve una lista

console.log(title)
console.log(title2)
console.log(listItems)

const items = document.querySelectorAll('li')
console.log(items)

// Aunque esta lista no es un array hay que hacer la conversión
nodeList = [...document.querySelectorAll('li')] // spread operator
ndoeList = Array.from(document.querySelectorAll('li'))

nodeList.map( el => el.style.background = 'red' )

nodeList.map( el => {
    if( el.textContent.trim().toUpperCase() === 'OBJECT') {
        el.remove()
    }
})

// Tambien se podria usar un for of
for(el of nodeList){
    if( el.textContent.trim().toUpperCase() === 'OBJECT') {
        el.remove()
    }
}

// Atributos
const title3 =  document.querySelector('h1')

title3.setAttribute('id', 'title')
console.log(title)

title3.classList.add('main-title', 'title-front-page')

console.log(title3.textContent) // Devuelve todo el texto que encuentre
console.log(title3.innerHTML) // Devuelve el contenido con etiquetas HTML (eficiente para editar y colocar html)
console.log(title3.outerHTML) // Devuelve por completo el elemento

// Crear elementos
const profesor = document.createElement('h2')

profesor.textContent = 'Mauricio Brito'
profesor.classList.add('teacher')
profesor.id = 'teacher'

document.body.appendChild(profesor)