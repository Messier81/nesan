import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className="Projects">
            <Link to="/munote">
                <li>MU NOTE</li>
            </Link>
        </div >
    )
}

export default Projects
