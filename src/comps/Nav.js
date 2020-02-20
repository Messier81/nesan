import React from 'react'

import './Nav.css'

import { Link } from 'react-router-dom'

// Navigation bar
function Nav() {
    return (
        <nav className="nav-main">
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <li><a href="https://github.com/Messier81">GitHub</a></li>
                <li><a href="https://github.com/Messier81">Resume</a></li>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
