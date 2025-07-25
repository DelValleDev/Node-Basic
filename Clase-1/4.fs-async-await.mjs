import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./Clase-1/archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('--> Haciendo algo mientras se lee...')

console.log('Leyendo el segundo archivo...')
const secondText = await readFile('./Clase-1/archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
