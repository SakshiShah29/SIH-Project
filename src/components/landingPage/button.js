import React from 'react'
import arrow from '../../images/right-arrow.png'
const button = (props) => {
    return (
        <>
            <button onClick={props.onClick} className="buttons">  {props.buttonName} <img src={arrow} className="arrow-img" alt="arrow" /> </button>
        </>
    )
}

export default button