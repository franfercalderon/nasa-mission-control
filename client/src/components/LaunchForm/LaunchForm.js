import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function LaunchForm({planets, submitLaunch}) {

    // console.log(planets)

    const [startDate, setStartDate] = useState(new Date())
    const [missionName, setMissionName] = useState('')
    const [rocketType, setRocketType] = useState('')
    const [destination, setDestination] = useState('')


    // const handleSubmit = (e) =>{

    //     e.preventDefault()
    //     console.log(startDate)
    //     console.log(missionName)
    //     console.log(rocketType)
    //     console.log(destination)
    // }

    return(
        <div className="mission-form-container">
            <form 
                className="mission-form"
                onSubmit={submitLaunch}
            >
                <label>
                    Launch Date
                    <DatePicker
                        selected={startDate}
                        name='launchDate'
                        onChange={(date) => setStartDate(date)}
                    />
                </label>
                <label>
                    Mission Name
                    <input 
                        type="text"
                        value={missionName} 
                        name='mission'
                        onChange={(e) => setMissionName(e.target.value)}
                    />
                </label>
                <label>
                    Rocket Type
                    <input 
                        type="text"
                        value={rocketType} 
                        name='rocket'
                        onChange={(e) => setRocketType(e.target.value)}
                    />
                </label>
                <label>
                    Destination Planet
                    <select
                        value={destination} 
                        name='destination'  
                        onChange={(e) => setDestination(e.target.value)} 
                    >
                        {planets.length > 0 &&
                        planets.map((planet, idx) => {
                            return (
                            <option
                                value={planet.kepler_name}
                                key={idx}
                            >
                            {planet.kepler_name}
                            </option>
                            )
                        })}
                    </select> 
                </label>
                <button type="submit" className="mission-form-button">
                    Create mission
                </button>

            </form>
        </div>
    )
}