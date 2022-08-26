import React, { useState } from 'react'
import './landingPage.css'
import CardLandingPage from './cardLandingPage'
import CardLandingPageReverse from './cardLandingPageReverse'
import vsCodeVariable from '../../images/vscode.png'
import post1 from '../../images/post-1.svg'
import post2 from '../../images/post-2.svg'
import post3 from '../../images/post-3.svg'
import post4 from '../../images/post-4.svg'
import post5 from '../../images/post-5.svg'
import Footer from './footer'
import LoginModal from '../Modals/LoginModal'
import SignupModal from '../Modals/SignupModal'
import VidCardLandingPage from './VidCardLandingPage'


const LandingPage = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const showLoginPage = () => {
        setIsLogin(true)
    };

    const loginHandler = () => {
        setIsLogin(false);
    }

    const showSignUp = () => {
        setIsSignup(true);
    }

    const signupHandler = () => {
        setIsSignup(false)
    }
    return (
        < >

            {isLogin && <LoginModal onLogin={loginHandler} walletaddress={props.walletaddress} setwalletaddress={props.setwalletaddress} />}
            {isSignup && <SignupModal onSignup={signupHandler} />}
            <div className="navbar">
                <div className="logo">
                    <p>Sahayog</p>
                </div>
                <div className="menu-items">
                    <button onClick={showLoginPage} className="btn-landingPage">Login</button>
                    <button onClick={showSignUp} className="btn-outline-landingPage">Sign Up</button>
                </div>
            </div>

            <div className="landing-page d-flex flex-column justify-content-center align-items-center">

                <VidCardLandingPage />
                <h1>Our Features</h1>
                <CardLandingPage onClick={showLoginPage} imageName={post1} cardName="Easy to use search and filter" cardDetails="This functionality works in a way that the users can
search for project title and then filter projects based on
universities and domain area.
There is also a filter for Completed and Ongoing
projects so that students can know about the current
standard of completed projects and if they are
interested in working on projects they can also
collaborate with the team on that project." />
                <CardLandingPageReverse onClick={showLoginPage} imageName={post2} cardName="Upload Project with Ease" cardDetails="Here in order to showcase their work , students can
upload their projects but before that these projects
would be sent to the university admin to verify the
project for plagiarism. For this purpose, the students have to add project title,
and abstract." />
                <CardLandingPage onClick={showLoginPage} imageName={post3} cardName="Collaborate with Others" cardDetails="On viewing the projects taken up by universities accross
the nation, if a students wishes to work on a particular
project with students from a different university,
students can talk to the createros of that project and
upon agrrement of collaboration, they can chat with
them." />
                <CardLandingPageReverse onClick={showLoginPage} imageName={post4} cardName="Verified by admin" cardDetails="The admin will receive all the projects from the university students. they will look into all the projects and accept amd reject them." />
                <CardLandingPage onClick={showLoginPage} imageName={post5} cardName="Plagarism Checker" cardDetails="The plagiarism checker is used by the admins of
universities to check the percentage of plagiarism of
similar projects.
it works on two levels, first it would check the title of the
project followed by the abstract." />

            </div>

            <Footer />

        </>
    )
}

export default LandingPage