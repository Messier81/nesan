import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className="Projects">
            <Link to="/lecrec">
                <li>Lecture Recorder</li>
            </Link>
        </div >
    )
}

export default Projects
