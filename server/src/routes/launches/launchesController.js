const { getAllLaunches , addNewLaunch, existsLaunchWithId, abortLaunchById} = require('../../models/launchesModel')

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {

    //Gets information from request body
    const launch = req.body

    //Checks all fields contain information
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination) {
        res.status(400).json({error: 'Mission required launch property'})
    }

    //Parses date string into JS date object
    launch.launchDate = new Date (launch.launchDate)
    //Checks if date input was valid:
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({error: 'Invalid launch date'})
    }

    addNewLaunch(launch)

    return res.status(201).json(launch)
}

function httpDeleteLaunch(req, res) {
    const id = Number(req.params.id)
    if (!existsLaunchWithId(id)) {
        return res.status(404).json({
            error: 'Launch not found'
        })
    }
    else {
        const aborted = abortLaunchById(id)
        return res.status(200).json(aborted)
    }
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpDeleteLaunch
}