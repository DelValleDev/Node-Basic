// Esto solo en los modulos nativos
// que no tienen promesas nativas

// const { promisify } = require ('util')
// const readFilePromise = promisify (fs.readfile)

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./Clase-1/archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('--> Haciendo algo mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./Clase-1/archivo2.txt', 'utf-8')
  .then(secondText => {
    console.log('segundo texto:', secondText)
  })
