import React, { useState } from 'react'
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
                    <p>Het Parekh</p>
                    <img src={avatar} alt="" onClick={openProfile} />
                </div>
            </div>

            <div className="drop-down d-none">
                <ul>
                    <li> <a href="">My Profile</a> </li>
                    <li> <a href="">LogOut</a> </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar