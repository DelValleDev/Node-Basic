import { platform, arch, cpus, freemem, totalmem, homedir, tmpdir, hostname, networkInterfaces, uptime } from 'os'

console.log('Información del sistema operativo: ')
console.log('--------------------------------')
console.log('Plataforma: ', platform())
console.log('Arquitectura: ', arch())
console.log('CPUs: ', cpus())
console.log('Memoria libre: ', (freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB')
console.log('Memoria total: ', (totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB')
console.log('Directorio home: ', homedir())
console.log('Directorio temporal: ', tmpdir())
console.log('Nombre del equipo: ', hostname())
console.log('Interfaces de red: ', networkInterfaces())
console.log('Tiempo de actividad: ', (uptime() / 60 / 60).toFixed(2), 'horas')
