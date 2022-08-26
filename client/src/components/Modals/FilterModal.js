import React from 'react'
import Filter from '../filter/Filter'
import LoginModal from './LoginModal'
import classes from "./LoginModal.module.css"
const FilterModal = (props) => {
  return (
    <div>
    <div className={classes.backdrop} onClick={props.filter}></div>
    <div className={classes.modal}><Filter/></div>
    </div>
  )
}

export default FilterModal