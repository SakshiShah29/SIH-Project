import React from 'react'
import Button from './button'
import landingPageVid from '../../images/landingPageVid.mp4'
import './landingPage.css'
const VidCardLandingPage = (props) => {
    return (
        <>
            <div className="cardLandingPage" >

                <div className="card-body">
                    <h5 className="card-title-landingPage">Card title</h5>
                    <p className="card-text-landingPage">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <Button buttonName="Explore Projects" onClick={props.onClick} /> */}
                </div>
                <video width="600" height="450" autoPlay controls>
                    <source src={landingPageVid} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default VidCardLandingPage