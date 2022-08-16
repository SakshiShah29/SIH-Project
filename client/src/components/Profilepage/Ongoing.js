import React from 'react'
import { Fragment } from 'react'
import Card from './Card';
import classes from "./Ongoing.module.css";

const Ongoing = () => {
  return (
        
<Fragment>
<h3>Ongoing Projects</h3>
    <div className={classes.body}>
   <Card tag="Ongoing"/>
   <Card tag="Ongoing"/>
<Card tag="Ongoing"/>
<Card tag="Ongoing"/>
<Card tag="Ongoing"/>
<Card tag="Ongoing"/>
<Card tag="Ongoing"/>
<Card tag="Ongoing"/>
<Card tag="Ongoing"/>
<Card tag="Ongoing"/>
<Card tag="Ongoing"/>
    </div>
</Fragment>
  )
}

export default Ongoing