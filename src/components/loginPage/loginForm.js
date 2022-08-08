import React, { useContext } from "react";
import { AccountContext } from "./accountContext";
import classes from "./Login.module.css";


import { Marginer } from "./marginer";
function Loginform(props) {

    const {switchToSignup}=useContext(AccountContext);
  return (
    <div className={classes.boxcontainer}>
    
    <img className={classes.image}></img>
    <Marginer direction="vertical" margin="3em"/>
      <form className={classes.formcontainer}>
        <input className={classes.inputcontainer} type="email" placeholder="Email" />
        <input className={classes.inputcontainer} type="password" placeholder="Password" />
      </form>
      <Marginer direction="vertical" margin={10}/>
      <a className={classes.mutedlink} href="#">Forget your password?</a>
      <Marginer direction="vertical" margin="2em"/>
      <button className={classes.submitbutton} type="submit">Login</button>
      <Marginer direction="vertical" margin="2em"/>
      <a className={classes.mutedlink} href="#">Dont have an account? <a className={classes.boldlink} onClick={switchToSignup} href="#">Signup</a></a>
      <Marginer direction="vertical" margin="1em"/>
    </div>
  );
}

export default Loginform;
