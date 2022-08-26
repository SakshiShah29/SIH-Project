import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";
import globe from "../../images/community.svg";
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

  const handleDiscordLinks = () => {
    document.querySelector('.list-group').classList.toggle('d-none')
  }
  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          <p>Sahayog</p>
        </div>
        <div className="menu">

          <div class="btn-group">
            <img src={globe} alt="" className="community" onClick={handleDiscordLinks} />

          </div>
          <p>Het</p>
          <img src={avatar} alt="" onClick={openProfile} />

        </div>
      </div>
      <div class="list-group d-none">
        <a href="https://discord.gg/zRCyA4YG" target="_blank" class="list-group-item list-group-item-action">Blockchain</a>
        <a href="https://discord.gg/kjfR7CeH" target="_blank" class="list-group-item list-group-item-action">DevOps</a>
        <a href="https://discord.gg/nArjDx7r" target="_blank" class="list-group-item list-group-item-action">Cloud Computing</a>
        <a href="https://discord.gg/PJ7cQYmQ" target="_blank" class="list-group-item list-group-item-action">Artificial Intelligence</a>
        <a href="https://discord.gg/pzZayzvH" target="_blank" class="list-group-item list-group-item-action">IoT</a>
        <a href="https://discord.gg/SjY4C3jH" target="_blank" class="list-group-item list-group-item-action">Data Science</a>
        <a href="https://discord.gg/c2qB2rsF" target="_blank" class="list-group-item list-group-item-action">Machine Learning</a>
        <a href="https://discord.gg/WWKnQaUx" target="_blank" class="list-group-item list-group-item-action">Cyber Security</a>
        <a href="https://discord.gg/Jr9WXWFV" target="_blank" class="list-group-item list-group-item-action">Mobile App Development</a>
        <a href="https://discord.gg/YzFrtYvX" target="_blank" class="list-group-item list-group-item-action">Web Development</a>
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
