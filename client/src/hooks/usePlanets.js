import {useCallback, useEffect, useState} from 'react'

import { httpGetPlanets } from './requests'

function usePlanets() {
    //This hook contains a function that calls the API to fetch for planets.
    //These are stored in a state
    const [planets, setPlanets] = useState([])

    const getPlanets = useCallback(async () => {
        const fetchedPlanets = await httpGetPlanets()
        setPlanets(fetchedPlanets)
    },[])

    useEffect(() => {
        getPlanets()
    },[getPlanets])

    return planets
}

export default usePlanets