const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./Clase-1/archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('--> Haciendo algo mientras se lee el archivo...') //
console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./Clase-1/archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
