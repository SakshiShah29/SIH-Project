import React from 'react'
import Button from './button'
import './landingPage.css'
const cardLandingPage = (props) => {
    return (
        <>
            <div class="cardLandingPage" >

                <div class="card-body">
                    <h5 class="card-title-landingPage">Card title</h5>
                    <p class="card-text-landingPage pb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button buttonName="Explore Projects" onClick={props.onClick} />
                </div>
                <img src={props.imageName} class="card-img-top " alt="..." />
            </div>
        </>
    )
}

export default cardLandingPage