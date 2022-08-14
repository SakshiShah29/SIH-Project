import React from 'react'
import { Link } from "react-router-dom";
import avatar from '../../images/avatar.png'
import './Navbar.css'
const Navbar = () => {

    const openProfile = () => {
        // document.onload.querySelector('.drop-down').classList.add('profile-dropdown')
        document.querySelector('.drop-down').classList.toggle('d-none')
    }

    return (
        <>

            <div className="navbar">
                <div className="logo">
                    <p>Sagayog</p>
                </div>
                <div className="menu">
                    <p>User Name</p>
                    <img src={avatar} alt="" onClick={openProfile} />
                </div>
            </div>

            <div className="drop-down d-none">
                <ul>
                    <li> <Link to="ProfilePage">My Profile</Link> </li>
                    <li> <Link to="/landingPage">LogOut</Link> </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar