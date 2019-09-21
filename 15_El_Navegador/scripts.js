const form = document.getElementById('responsive-tester-form')

if(form){
    form.addEventListener('submit', () => {
        let url = form.querySelector('#url')
        let width = form.querySelector('#width')
        let height = form.querySelector('#height')

        if(width && height && url){
            width = width.value
            height = height.value
            url = url.value
            console.log(width)
        }

        /*Para que tome las medidas solamente del viewport no la ventana usamos innerWidth y innerHeight 
        se podría usar width y height pero tomaria toda la ventana*/
        window.open(url,url,`innerWidth=${width}`, `innerHeight=${height}`)
        
        // con .close() se cierra una ventana abierta con .open()


    })
}

// Devuelve la url actual
console.log(location.href)
// cambiar la ruta
// location.href="https://google.com"

// Devuelve solo el dominio
console.log(location.host)

 const links = document.links


// Ejercicio práctico links internos
 for(link of links){
     if(link.href.includes(location.host)){
         link.style.background = 'yellow'
         console.log(link)
     }
 }

 // pathname
 if(location.pathname.includes('cursos')){
     document.body.classList.add('cursos-page')
 }