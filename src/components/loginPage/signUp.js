import React, { useContext } from 'react'
import { AccountContext } from './accountContext';

import classes from "./Signup.module.css"
import { Marginer } from './marginer';
function Signup(props) {
    const {switchToSignin}=useContext(AccountContext);
  return (
    <div className={classes.boxcontainer}>
    
    <img className={classes.image}></img>
    <Marginer direction="vertical" margin="1em"/>
      <form className={classes.formcontainer}>
      <input className={classes.inputcontainer} type="text" placeholder="Name" />
        <input className={classes.inputcontainer} type="email" placeholder="Email" />
        <input className={classes.inputcontainer} type="dropdown" placeholder="Institute" />
        <input className={classes.inputcontainer} type="password" placeholder="Password" />
        <input className={classes.inputcontainer} type="text" placeholder="Domain Interest" />
        <input className={classes.inputcontainer} type="number" placeholder="Phone Number" />
      </form>
      <Marginer direction="vertical" margin="1em"/>
      <button className={classes.submitbutton} type="submit">Sign Up</button>
      <Marginer direction="vertical" margin="1em"/>
      <a className={classes.mutedlink} href="#">Already have an account? <a className={classes.boldlink} onClick={switchToSignin} href="#">Login</a></a>
      <Marginer direction="vertical" margin="1em"/>
    </div>
  )
}

export default Signup