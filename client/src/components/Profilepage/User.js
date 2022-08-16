import React from 'react'
import classes from "./User.module.css";
import user from "../../images/user.png"
function User() {
  return (
    <div className={classes.user}>
    <img src={user} className={classes.img} ></img>
    </div>
  )
}

export default User