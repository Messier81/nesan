import React from 'react'

function DevLink(props) {
    return (
        <a className="DevLink" href={props.devURL}>
            <img className="DevLinkImg" src={props.imgURL} alt={props.imgALT} />
        </a>
    )
}

export default DevLink