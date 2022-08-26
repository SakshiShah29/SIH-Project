import React from 'react'
import Button from './button'
import landingPageVid from '../../images/landingPageVid.mp4'
import './landingPage.css'
const VidCardLandingPage = (props) => {
    return (
        <>
            <div className="cardLandingPage" >

                <div className="card-body">
                    <h5 className="card-title-landingPage">Sahayog Portal</h5>
                    <p className="card-text-landingPage">To develop a progressive web application with amazing user interface which
                        caters the needs of allthe university/college students and faculty across India.
                        Here students will be able to upload their projects along with it’s project
                        description after being approved by their respective admins in each university
                        and these projects will be listed underthe respective universities.
                        Students will also be able to see the problem statements of different projects
                        taken up by students across the universities in various domains and can even
                        collaborate with them if consentis approved.</p>
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