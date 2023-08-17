const API_URL = 'http://localhost:5500'

async function httpGetPlanets() {
    //Loads planets and return as JSON
    const response = await fetch(`${API_URL}/planets`)
    return await response.json()
}

async function httpGetLaunches() {
    //Loads launches and return as JSON
    const response = await fetch(`${API_URL}/launches`) 
    const fetchedLaunches = await response.json()
    return fetchedLaunches.sort((a, b) => {
        return a.flightNumber - b.flightNumber
    })
}

async function httpSubmitNewLaunch(launch) {

    try {
        return await fetch(`${API_URL}/launches`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(launch) 
        })
    } catch(err) {
        return { ok: false }
    }
}

async function httpAbortLaunch(id) {

    try {
        return await fetch(`${API_URL}/launches/${id}`, {
            method: "delete"
        })
    } catch(err) {
        return { ok: false }
    }

}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitNewLaunch,
    httpAbortLaunch

}
