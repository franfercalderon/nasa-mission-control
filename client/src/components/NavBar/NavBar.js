import { NavLink } from "react-router-dom"

export default function NavBar(){
    return(
        <div className="navbar-main-container">
            <div className="navbar-logo-container">
                <img src="images/nasa.png"alt="nasa"/>
                <h2>Mission Control</h2>
            </div>
            <ul>
                <NavLink to={'/'}>
                    <li>Launch</li>
                </NavLink>
                <NavLink to={'/upcoming'}>
                    <li>Upcoming</li>
                </NavLink>
                <NavLink to={'/history'}>
                    <li>History</li>
                </NavLink>
            </ul>
        </div>
    )
}