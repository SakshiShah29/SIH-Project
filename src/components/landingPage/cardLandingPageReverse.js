import React from 'react'
import Button from './button'
import './landingPage.css'

const cardLandingPageReverse = (props) => {
    return (
        <>
            <div className="cardLandingPage mb-5 mt-5" >
                <img src={props.imageName} className="card-img-top" alt="..." />

                <div className="card-body ml-2">
                    <h5 className="card-title-landingPage">Card title</h5>
                    <p className="card-text-landingPage pb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button onClick={props.onClick} buttonName="Explore Projects" />
                </div>
            </div>
        </>
    )
}

export default cardLandingPageReverse