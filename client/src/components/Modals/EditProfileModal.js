import React from 'react'
import EditProfile from '../Profilepage/EditProfile'
import classes from "./LoginModal.module.css";
const EditProfileModal = (props) => {
  return (
    <div>
        <div className={classes.backdrop} onClick={props.onClose}></div>
        <div className={classes.modal}><EditProfile closeEditProfile={props.closeEditProfile}/></div>
        </div>
  )
}

export default EditProfileModal