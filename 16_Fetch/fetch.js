const url = 'http://date.jsontest.com'

fetch( url )
    .then( r => r.json())
    .then( data => console.log(data))
    .catch( e => console.log(`Hubo un error ${e}`))