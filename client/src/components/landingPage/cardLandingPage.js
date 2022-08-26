import React from 'react'
import Button from './button'
import './landingPage.css'
const cardLandingPage = (props) => {
    return (
        <>
            <div className="cardLandingPage" >

                <div className="card-body">
                    <h5 className="card-title-landingPage">{props.cardName}</h5>
                    <p className="card-text-landingPage">{props.cardDetails} </p>
                    {/* <Button buttonName="Explore Projects" onClick={props.onClick} /> */}
                </div>
                <img src={props.imageName} className="card-img-top " alt="." />
            </div>
        </>
    )
}

export default cardLandingPage