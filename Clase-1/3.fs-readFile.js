const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./Clase-1/archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
})

console.log('--> Haciendo algo mientras se lee el archivo...') //
console.log('Leyendo el segundo archivo...')
fs.readFile('./Clase-1/archivo2.txt', 'utf-8', (err, secondText) => {
  console.log(secondText)
})
