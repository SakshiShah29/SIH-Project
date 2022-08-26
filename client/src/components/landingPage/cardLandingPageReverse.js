import React from 'react'
import Button from './button'
import './landingPage.css'

const cardLandingPageReverse = (props) => {
    return (
        <>
            <div className="cardLandingPage" >
                <img src={props.imageName} className="card-img-top" alt="..." />

                <div className="card-body ml-2">
                    <h5 className="card-title-landingPage">{props.cardName}</h5>
                    <p className="card-text-landingPage">{props.cardDetails} </p>
                    {/* <Button onClick={props.onClick} buttonName="Explore Projects" /> */}
                </div>
            </div>
        </>
    )
}

export default cardLandingPageReverse