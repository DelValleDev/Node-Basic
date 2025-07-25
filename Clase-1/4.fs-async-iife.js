// Esto solo en los modulos nativos
// que no tienen promesas nativas

// const { promisify } = require ('util')
// const readFilePromise = promisify (fs.readfile)
// import { readFile } from 'node:fs

const readFile = require('node:fs/promises')

// IIFE - Immediately Invoked Function Expression
// Es una función que se ejecuta inmediatamente después de ser definida

;(
  async () => {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./Clase-1/archivo.txt', 'utf-8')
    console.log('primer texto:', text)

    console.log('--> Haciendo algo mientras se lee...')

    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./Clase-1/archivo2.txt', 'utf-8')
    console.log('segundo texto:', secondText)
  })()
