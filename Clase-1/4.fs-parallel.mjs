import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./Clase-1/archivo.txt', 'utf-8'),
  readFile('./Clase-1/archivo2.txt', 'utf-8')
])
  .then(([text, secondText]) => {
    console.log('primer texto:', text)
    console.log('segundo texto:', secondText)
  })
