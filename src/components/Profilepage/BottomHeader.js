import React from 'react'
import {NavLink} from "react-router-dom"
import classes from "./BottomHeader.module.css"
function BottomHeader() {
  return (
    <header className={classes.header}>
    <nav>
      <ul>
        <button>
        <NavLink activeClassName={classes.active} to="/Completed"><h3>Completed</h3></NavLink>
        </button>
        <button>
        <NavLink activeClassName={classes.active} to="/Ongoing"><h3>Ongoing</h3></NavLink>
        </button>
        <button>
        <NavLink activeClassName={classes.active} to="/Remaining"><h3>Remaining</h3></NavLink>
        </button>
      </ul>
    </nav>
  </header>
  );
};

export default BottomHeader