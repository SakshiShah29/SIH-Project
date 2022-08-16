import React from 'react'
import { Fragment } from 'react'
import classes from "./Remaining.module.css"
import Card from './Card'
const Remaining = () => {
  return (
    <Fragment>
    <h3>Remaining Projects</h3>
        <div className={classes.body}>
       <Card tag="Remaining"/>
       <Card tag="Remaining"/>
    <Card tag="Remaining"/>
    <Card tag="Remaining"/>
    <Card tag="Remaining"/>
    <Card tag="Remaining"/>
    <Card tag="Remaining"/>
    <Card tag="Remaining"/>
    <Card tag="Remaining"/>
    <Card tag="Remaining"/>
    <Card tag="Remaining"/>
        </div>
    </Fragment>
  )
}

export default Remaining