import React from 'react'
import Button from './button'
import './landingPage.css'
const cardLandingPage = (props) => {
    return (
        <>
            <div className="cardLandingPage" >

                <div className="card-body">
                    <h5 className="card-title-landingPage">Card title</h5>
                    <p className="card-text-landingPage">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <Button buttonName="Explore Projects" onClick={props.onClick} /> */}
                </div>
                <img src={props.imageName} className="card-img-top " alt="." />
            </div>
        </>
    )
}

export default cardLandingPage