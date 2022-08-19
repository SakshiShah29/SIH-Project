import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import close from "../../images/Close.png"
import user from "../../images/user.png"
import { Marginer } from '../loginPage/marginer';
import classes from "./EditProfile.module.css"

const EditProfile = (props) => {

  return (
    <div className={classes.boxcontainer}>
    <div classname={classes.close}><img   onClick={props.closeEditProfile}src={close}></img> </div>
    <form className={classes.formcontainer}>

    <h2>Edit Profile</h2>
    <img src={user}></img>
      <input
        className={classes.inputcontainer}
        type="text"
        placeholder="Full Name"
        
      />
      <input
        className={classes.inputcontainer}
        type="email"
        placeholder="Email"
        
      />

      <input className={classes.inputcontainer}
    
      placeholder="Institute"/>

      <input
      className={classes.inputcontainer}
      type="password"
      placeholder="Password"
      
    />

    <input className={classes.inputcontainer}
    
    placeholder="Domain interested" />

    <input
      className={classes.inputcontainer}
      type="number"
      placeholder="Phone Number"
      
    />

    </form>
 
    
    <Marginer direction="vertical" margin="2em" />
    <button
      className={classes.submitbutton1}
      type="submit"
      
    >
      Save
    </button>
    <Marginer direction="vertical" margin="2em" />
   
  </div>
);
  
}

export default EditProfile