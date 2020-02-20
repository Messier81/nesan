import React from 'react'

import './Nav.css'

import { Link } from 'react-router-dom'

// Navigation bar

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <li><a href="https://github.com/Messier81">GitHub</a></li>
            </ul>
        </nav>
    )
}

export default Nav
