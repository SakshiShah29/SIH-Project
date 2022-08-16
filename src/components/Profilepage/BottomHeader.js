import React from 'react'
import {NavLink} from "react-router-dom"
import classes from "./BottomHeader.module.css"
function BottomHeader() {
  return (
    <header className={classes.header}>
    <nav>
      <ul>
        <button>
        <NavLink activeClassName={classes.active} to="/Completed"><h4>Completed</h4></NavLink>
        </button>
        <button>
        <NavLink activeClassName={classes.active} to="/Ongoing"><h4>Ongoing</h4></NavLink>
        </button>
        <button>
        <NavLink activeClassName={classes.active} to="/Remaining"><h4>Remaining</h4></NavLink>
        </button>
      </ul>
    </nav>
  </header>
  );
};

export default BottomHeader