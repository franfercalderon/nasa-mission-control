const launches = new Map()

let latestFlightNumber = 100

const launch = {
    flightNumber: 100, 
    mission: 'Kepler Exploration I',
    rocket: 'Explorer II',
    launchDate : new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customers: ['NASA', 'ICAO'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

function existsLaunchWithId(launchId) {
    return launches.has(launchId)
}

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    latestFlightNumber ++
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customer: ['NASA', 'ICAO'],
            upcoming: true,
            success: true,
        })
    )
}

function abortLaunchById(id) { 
    //Gets the launch to be deleted from the Map, using it's id
    const aborted = launches.get(id)
    //Sets upcoming property to false
    aborted.upcoming = false
    aborted.success = false
    //Returns aborted launch
    return aborted
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}