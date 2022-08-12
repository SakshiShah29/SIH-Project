import React from 'react'
import classes from "./Logout.module.css"
import bell from "../../images/bell.png"
function Logout(props) {
  return (
    <nav className={classes.nav}>
    <img src={bell}></img>
          <button onClick={props.onLogout}>LogOut</button>
  </nav>
  )
}

export default Logout