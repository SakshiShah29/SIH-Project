import React, { useContext } from 'react'
import { AccountContext } from './accountContext';
import { Link } from "react-router-dom";
import classes from "./Signup.module.css"
import { Marginer } from './marginer';
function Signup(props) {

  return (
    <div className={classes.boxcontainer}>

      
    
      <form className={classes.formcontainer}>
        <input className={classes.inputcontainer} type="text" placeholder="Name" />
        <input className={classes.inputcontainer} type="email" placeholder="Email" />
        <input className={classes.inputcontainer} type="dropdown" placeholder="Institute" />
        <input className={classes.inputcontainer} type="password" placeholder="Password" />
        <input className={classes.inputcontainer} type="text" placeholder="Domain Interest" />
        <input className={classes.inputcontainer} type="number" placeholder="Phone Number" />
      </form>
      <Marginer direction="vertical" margin="1em" />
      <button className={classes.submitbutton1} type="submit">Sign Up</button>
      
      <Marginer direction="vertical" margin="2em" />
    </div>
  )
}

export default Signup