const promises = require('node:fs/promises')

promises.readdir('Clase-1')
  .then(files => {
    files.forEach(file => console.log(file))
  })
  .catch(err =>
    console.error('Error al leer la carpeta:', err)
  )
