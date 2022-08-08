import React from 'react'
import AccountBox from '../loginPage/accountBox';

import classes from "./LoginModal.module.css";
const LoginModal = (props) => {
  return (
    <div>
    <div className={classes.backdrop} onClick={props.onLogin}></div>
    <div className={classes.modal}><AccountBox /></div>
    </div>
  )
}

export default LoginModal