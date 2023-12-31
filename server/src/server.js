const http = require('http')

const app = require('./app')

const { loadPlanetData } = require('./models/planetsModel')

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

async function startServer() {

    await loadPlanetData()
    // console.log(await loadPlanetData())
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    })
}

startServer()



   