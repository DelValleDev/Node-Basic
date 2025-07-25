const path = require('node:path')

// barra separadora de carpetas segun el SO
console.log(path.sep)

// unir rutas con path.join()
const filePath = path.join('Clase-1', 'archivo.txt')
console.log(filePath)

// obtener el nombre del archivo
const base = path.basename(filePath)
console.log(base)

// obtener solo el nombre del archivo sin la extensión
const fileName = path.basename(filePath, '.txt')
console.log(fileName)

// obtener solo la extensión del archivo
const extension = path.extname(filePath)
console.log(extension)
