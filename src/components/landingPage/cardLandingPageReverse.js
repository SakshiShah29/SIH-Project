import React from 'react'
import Button from './button'
import './landingPage.css'

const cardLandingPageReverse = (props) => {
    return (
        <>
            <div class="cardLandingPage mb-5 mt-5" >
                <img src={props.imageName} class="card-img-top" alt="..." />

                <div class="card-body ml-2">
                    <h5 class="card-title-landingPage">Card title</h5>
                    <p class="card-text-landingPage pb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button onClick={props.onClick} buttonName="Explore Projects" />
                </div>
            </div>
        </>
    )
}

export default cardLandingPageReverse