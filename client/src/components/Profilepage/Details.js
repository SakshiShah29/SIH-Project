import React from 'react'
import classes from "./Details.module.css";
import edit from "../../images/edit.png"
function Details(props) {
  return (
    <div className={classes.details}>
    <div className={classes.upper}>
    <h2>{props.username}</h2>
    <img src={edit} ></img>
    </div>
    <h4>{props.institute}</h4>
    <h4>{props.branch}</h4>
    <h4>{props.interests}</h4>
    <h4>{props.description}</h4>
    </div>
  )
}

export default Details