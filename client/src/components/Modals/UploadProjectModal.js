import React from 'react'
import classes from "./LoginModal.module.css"
import UploadProject from '../UploadProject/UploadProject'
const UploadProjectModal = (props) => {
    return (
        <div>
        <div className={classes.backdrop} onClick={props.onClick}></div>
        <div className={classes.modal}><UploadProject/></div>
        </div>
      )
}

export default UploadProjectModal