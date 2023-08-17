const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')


const planetsRouter = require('./routes/planets/planetsRouter')
const launchesRouter = require('./routes/launches/launchesRouter')
//1- Request comes in to our application
const app = express()


//2- Request is checked by json Content-Type
//3- Request routed
app.use(cors({
    //Allows crossed origin petition from client port:
    origin: 'http://localhost:3000'
}))

app.use(morgan('combined'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
//Routers
app.use('/planets', planetsRouter)
app.use('/launches', launchesRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app