export default function UpcomingTable({launches, abortLaunch}) {

    return(
        <div className="upcoming-table-container">
            <table className="upcoming-table">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Date</th>
                        <th>Mission</th>
                        <th>Rocket</th>
                        <th>Destination</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {launches
                        .filter((launch) => launch.upcoming)
                        .map((launch, idx) => {
                            return(
                                <tr key={idx}>
                                    <td>{launch.flightNumber}</td>
                                    <td>{launch.launchDate}</td>
                                    <td>{launch.mission}</td>
                                    <td>{launch.rocket}</td>
                                    <td>{launch.destination}</td>
                                    <th className="cancel-launch-btn" onClick={() => abortLaunch(launch.flightNumber)}>
                                        x
                                    </th>
                                </tr>
                            )
                        })
                    }    
                </tbody>
            </table>
        </div>
    )
}