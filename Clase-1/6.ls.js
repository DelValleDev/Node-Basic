const fs = require('node:fs')

fs.readdir('Clase-1', (err, files) => {
  if (err) {
    console.error('Error al leer la carpeta:', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
