const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] || 'Clase-1'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error(pc.red(`❌ Error al leer la carpeta ${folder}:`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // stat = info del archivo
    } catch (error) {
      console.error(pc.red(`❌ Error al obtener los datos del archivo ${filePath}:`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size.toString()
    const fileModifiedDate = stats.mtime.toLocaleString()

    return `${pc.white(fileType)}  ${pc.blue(file.padEnd(30))} ${pc.gray(fileSize.padStart(10))} ${pc.gray('B')} ${pc.yellow(fileModifiedDate)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => {
    console.log(fileInfo)
  })
}

console.log(process.uptime())

ls(folder)
