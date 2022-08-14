import React from 'react'
import User from "./User"

import Details from "./Details"
import classes from "./Navbar.module.css";
import Button from './Button';
const Navbar=()=>{
  return (
    <div className={classes.navbar}>
    <User />
    <Details username="Chris Porter" institute="institute" branch="branch" interests="interests" description="description"/>
    <div className={classes.btn}>
<Button>Upload Project</Button>
    </div>
    
    </div>
  )
}

export default Navbar