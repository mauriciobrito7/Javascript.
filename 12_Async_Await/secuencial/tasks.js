const util = require('util') // modulo de node 
const  sleep = util.promisify(setTimeout) // lo que hace es convertir funciones que se manejan con callbacks a funciones que se pueden manejar con promsesas o async await

module.exports = {
    async taskOne() {
        try{
            // throw new Error('Some error') crear un error
            await sleep(4000)
            return 'ONE VALUE'

        }catch(e){
            console.log(e)
        }
    },

    async taskTwo() {
        try{
            await sleep(2000)
            return 'TWO VALUE'
        }catch(e){
            console.log(e)
        }
    }
}