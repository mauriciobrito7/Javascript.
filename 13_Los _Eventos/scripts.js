const title = document.getElementById('title')
const button = document.getElementById('button')

const holaMundo = e => alert(e.target.textContent) //e.target devuelve el elemento del dom donde se originó el eveento

// Escucha el evento

//click
title.addEventListener('click', e =>{
    holaMundo(e)
})
button.addEventListener('click', e => { 
    holaMundo(e)
}) 

// cuando el mouse entra
title.addEventListener('mouseenter', e => {
    holaMundo(e)
})
// cuando el mouse sale
button.addEventListener('mouseleave', e => {
    holaMundo(e)
})
// Creando me personalizado al momento de hacer click derecho
const createMenu = e =>{
    const menu = document.createElement('div')
    menu.textContent = 'Soy un menu contextual'
    menu.id = 'context-menu'
    const prevMenu = document.getElementById('context-menu')

    if(prevMenu){
        document.body.removeChild(prevMenu)
    }
    document.body.appendChild(menu)
    menu.style.padding = '1em'
    menu.style.background = '#eee'
    menu.style.position = 'fixed'
    menu.style.top = `${e.pageY}px`
    menu.style.left = `${e.pageX}px`
    

}

// capturar menu del click derecho
button.addEventListener('contextmenu', e => {
    createMenu(e)
    e.preventDefault()
})

// mousedown
/*Cuando se hace click y se deja presionado el click*/

// mouseup
/*Momento en que se suelta el click */

//mousemove
/*cuando el usuario se mueve dentro de un elemento */