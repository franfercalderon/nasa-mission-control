import { useCallback, useEffect, useState } from "react";

import { httpGetLaunches, httpSubmitNewLaunch, httpAbortLaunch } from './requests'

function useLaunches() {

    const [launches, setLaunches] = useState([])
    const [isPendingLaunch, setIsPendingLaunch] = useState(false)

    const getLaunches = useCallback(async () => {
        const fetchedLaunches = await httpGetLaunches()
        setLaunches(fetchedLaunches)
    },[])

    useEffect(() => {
        getLaunches()
    },[getLaunches])

    const submitLaunch = useCallback((async (e) => {
        //Prevents browser from reloading
        e.preventDefault()

        //Turns loader on
        setIsPendingLaunch(true)

        //Reads form
        const form = e.target
        const formData = new FormData(form)

        //Parses from to JSON 
        const formJson = Object.fromEntries(formData.entries())

        //Creates launch object
        const launch = {
            mission: formJson.mission,
            launchDate: formJson.launchDate,
            rocket: formJson.rocket,
            destination: formJson.destination
        }

        const response = await httpSubmitNewLaunch(launch)
        const success = response.ok
        if (success) {
            getLaunches()
            setTimeout(() => {
                setIsPendingLaunch(false)
            },1000)
        }
        
    }),[getLaunches])

    const abortLaunch = useCallback(async (id) => {
        const response = await httpAbortLaunch(id)
        const success = response.ok
        if (success) {
            getLaunches()
        }

    },[getLaunches])

    return {
        launches,
        isPendingLaunch,
        submitLaunch,
        abortLaunch
    }
}

export default useLaunches