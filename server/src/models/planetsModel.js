const path = require('path')
const fs = require('fs')

const {parse} = require('csv-parse')

const habitablePlanets = []

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 
    && planet['koi_insol'] < 1.11 
    && planet['koi_prad'] < 1.6
}

function loadPlanetData() {
    return new Promise((resolve, reject) => {

        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', (data) => {
                if(isHabitablePlanet(data)) {
                    habitablePlanets.push(data)
                }
            })
            .on('error', (err)=>{
                reject()
            })
            .on('end', ()=>{
                console.log(`Se encontraron ${habitablePlanets.length} planetas compatibles con la fucking vida humana y tal vez de algunos gatis, pero no los naranja.`)
                resolve()
            })
    })
}

function getAllPlanets() {
    return habitablePlanets
}

module.exports = {
    getAllPlanets,
    loadPlanetData
}