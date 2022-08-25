import React from 'react'
import classes from "./Logout.css"
import bell from '../../images/bell.png'
function Logout(props) {

  const showNotificationDropDown = () => {

  }
  return (
    <nav className="nav">
      <div className="notification-area d-inline position-relative">

        <div class="btn-group">
          <img src={bell} alt="" className="bell_icon" onClick={showNotificationDropDown} />
          {/* <span class="position-absolute translate-middle badge rounded-pill bg-danger notification-badge">
            99+
            <span class="visually-hidden">unread messages</span>
          </span> */}

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            <li><a class="dropdown-item" href="#">Menu item</a></li>
            <li><a class="dropdown-item" href="#">Menu item</a></li>
            <li><a class="dropdown-item" href="#">Menu item</a></li>
          </ul>
        </div>
      </div>

      {/* <button onClick={props.onLogout}>LogOut</button> */}
    </nav>
  )
}

export default Logout