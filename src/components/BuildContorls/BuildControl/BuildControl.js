import React from 'react'
import './BuildControl.css'

const BuildControl = (props) => {
    return(
    <div>
        <div className='ingredient'>{props.type}</div>
        <button onClick={props.add}>More</button>
        <button onClick={props.rem}>Less</button>
    </div>
    )
}
export default BuildControl;