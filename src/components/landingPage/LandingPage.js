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
const LandingPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const showLoginPage = () => {
        setIsLogin(true)
    };

    const loginHandler = () => {
        setIsLogin(false);
    }
    return (
        <>
            {isLogin && <LoginModal onLogin={loginHandler} />}
            <div className="navbar">
                <div className="logo">
                    <p>Sahayog</p>
                </div>
                <div className="menu-items">
                    <button onClick={showLoginPage} class="btn-landingPage">Login</button>
                    <button class="btn-outline-landingPage">Sign Up</button>
                </div>
            </div>
            <div className="landing-page d-flex flex-column justify-content-center align-items-center pt-5">

                <CardLandingPage onClick={showLoginPage} imageName={vsCodeVariable} />

                <h1 className='mt-5 mb-5'>Our Features</h1>
                <CardLandingPage onClick={showLoginPage} imageName={post1} />
                <CardLandingPageReverse onClick={showLoginPage} imageName={post2} />
                <CardLandingPage onClick={showLoginPage} imageName={post3} />
                <CardLandingPageReverse onClick={showLoginPage} imageName={post4} />
                <CardLandingPage onClick={showLoginPage} imageName={post5} />

            </div>
            <Footer />
        </>
    )
}

export default LandingPage