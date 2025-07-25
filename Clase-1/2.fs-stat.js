const { statSync } = require('node:fs') // A partir de node 16 se recomienda usar node:fs en lugar de fs
const path = require('node:path')

// Stat es un método que devuelve información sobre un archivo o directorio.
const stats = statSync(path.join(__dirname, 'archivo.txt'))

console.log(
  stats.isFile(), // si es un archivo
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
)
