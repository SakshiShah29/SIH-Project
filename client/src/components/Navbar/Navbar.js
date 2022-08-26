import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";
import globe from '../../images/globe.png'
import "./Navbar.css";
const Navbar = () => {

  const navigate = useNavigate();
  const openProfile = () => {
    // document.onload.querySelector('.drop-down').classList.add('profile-dropdown')
    document.querySelector(".drop-down").classList.toggle("d-none");
  };
  const handleLogoClick = () => {
    navigate("/");
  }
  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          <p>Sahayog</p>
        </div>
        <div className="menu">
          <img src={globe} alt="" />
          <p>Het</p>
          <img src={avatar} alt="" onClick={openProfile} />
        </div>
      </div>

      <div className="drop-down d-none">
        <ul>
          <li>
            {" "}
            <Link to="/ProfilePage">My Profile</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">LogOut</Link>{" "}
          </li>
          {/* <li>
            {" "}
            <Link to="/Chatprofile">Message application</Link>{" "}
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
