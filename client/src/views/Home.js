import LaunchForm from '../components/LaunchForm/LaunchForm'
import usePlanets from '../hooks/usePlanets'
import useLaunches from '../hooks/useLaunches'

export default function Home(){

    const planets = usePlanets()

    const {submitLaunch} = useLaunches()
    // console.log(planets)
    return(
        <div className="home-main-container">
            <div className='home-inner-container'>
                <p>Schedule a mission launch for insterstellar travel to one of the Kepler Exoplanets.</p>
                <p>Only confirmed planetes matching the following criteria are avaiable for the earliest scheduled missions:</p>
                <ul>
                    <li>Planetary radius: {'<'} 1.6 times Earth's radius.</li>
                    <li>Effective stellar flux: {'>'} 0.36 times Earth's value and {'<'} 1.1 times Earth's value.</li>
                </ul>
                <LaunchForm planets={planets} submitLaunch={submitLaunch}/>
            </div>
        </div>
    )
} 