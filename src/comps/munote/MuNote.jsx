import React from 'react'
import './MuNote.css'

class MuNote extends React.Component {
    render() {
        return (
            <div className="MuNote" >
                <div class="sheet-music">
                    <div className="bar">
                        <div className="stave-header"></div>
                        <div className="b5 quarter-note"></div>
                        <div className="b5 quarter-note"></div>
                        <div className="c5 quarter-note"></div >
                        <div className="d5 quarter-note"></div >
                        <div className="bar-line"></div >
                    </div >
                </div>
            </div >
        )
    }
}

export default MuNote
