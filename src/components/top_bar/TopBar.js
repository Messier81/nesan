import React from 'react'
import './TopBar.css'
import MyName from './MyName'
import DevLink from './DevLink'
import githubLOGO from './github.svg'
import liLOGO from './linkedin.svg'
import resumeLOGO from './resume.svg'
import emailLOGO from './email.svg'

function TopBar() {
    return (
        <nav className="TopBar">
            <MyName />
            <DevLink
                devURL="https://github.com/Messier81"
                imgURL={liLOGO}
                imgALT="GitHub Logo"
            />
            <DevLink
                devURL="https://www.linkedin.com/in/sivanesan-vettivel-992318182/"
                imgURL={liLOGO}
                imgALT="LinkedIn Logo"
            />
            <DevLink
                devURL="https://www.linkedin.com/in/sivanesan-vettivel-992318182/"
                imgURL={liLOGO}
                imgALT="Resume"
            />
            <DevLink
                devURL="https://www.linkedin.com/in/sivanesan-vettivel-992318182/"
                imgURL={liLOGO}
                imgALT="Contact Me"
            />
        </nav>
    )
}

export default TopBar