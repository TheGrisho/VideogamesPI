import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <div className="navbar-div">
                <NavLink to="/"><button>Intro</button></NavLink>
                <NavLink to="/videogames"><button>Videogames</button></NavLink>
                <NavLink to="/createGame"><button>Create game</button></NavLink>

        </div>
    )
}

export default NavBar
