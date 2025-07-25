const http = require('node:http')

const desiredPort = process.env.PORT ?? 8080

const server = http.createServer((req, res) =>{
console.log('request received ', req.url)
res.end("Hola Mundo")
})


server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})