import React from 'react'

function PerLink(props) {
    return (
        <a className="PerLink" href={props.devURL}>
            <img className="PerLinkImg" src={props.imgURL} alt={props.imgALT} />
        </a>
    )
}

export default PerLink