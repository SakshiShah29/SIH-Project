import React from 'react'

import Signup from '../loginPage/signUp';

import classes from "./LoginModal.module.css";


const SignupModal = (props) => {
    return (
        <div>
        <div className={classes.backdrop} onClick={props.onSignup}></div>
        <div className={classes.modal}><Signup/></div>
        </div>)
}

export default SignupModal