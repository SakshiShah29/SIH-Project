import React, { Fragment } from 'react'

import Card from './Card'
import classes from "./Completed.module.css"
function Completed () {
  return (
    <Fragment>
    <h3>Completed Projects</h3>
    <div className={classes.body}>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
<Card tag="Completed"/>
    </div>
    </Fragment>
  )
}

export default Completed 