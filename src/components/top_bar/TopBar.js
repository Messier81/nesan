import React from 'react'
import './TopBar.css'
import MyName from './MyName'
import DevLink from './DevLink'
import githubLOGO from './github.svg'
import liLOGO from './linkedin.svg'
import PerLink from './PerLink';
import resumeLOGO from './resume.svg'

function TopBar() {
    return (
        <nav className="TopBar">
            <MyName />
            <DevLink
                devURL="https://github.com/Messier81"
                imgURL={githubLOGO}
                imgALT="GitHub Logo"
            />
            <DevLink
                devURL="https://www.linkedin.com/in/sivanesan-vettivel-992318182/"
                imgURL={liLOGO}
                imgALT="LinkedIn Logo"
            />
            <PerLink
                imgURL={resumeLOGO}
                imgALT="Resume"
            />

            <a href="/">Login</a>

            <a href="/">Login</a>
        </nav>
    )
}

export default TopBar