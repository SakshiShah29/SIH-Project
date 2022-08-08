import React from 'react'
import arrow from '../../images/right-arrow.png'
const button = (props) => {
    return (
        <>
            <button> onClick={props.onClick} class="buttons" {props.buttonName} <img src={arrow} class="arrow-img" alt="arrow" /> </button>
        </>
    )
}

export default button