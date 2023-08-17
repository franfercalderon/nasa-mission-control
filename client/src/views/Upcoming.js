import useLaunches from "../hooks/useLaunches"

import UpcomingTable from "../components/UpcomingTable/UpcomingTable"

export default function Upcoming(){

    const {launches, abortLaunch} = useLaunches()

    return(
        <div className="upcoming-main-container">
            <UpcomingTable launches={launches} abortLaunch={abortLaunch}/>
        </div>
    )
}