import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/about">
                    <li>Front</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
