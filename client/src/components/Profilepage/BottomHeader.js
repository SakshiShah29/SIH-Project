import React from 'react'
import {Link} from "react-router-dom"
import classes from "./BottomHeader.module.css"
function BottomHeader() {
  return (
    <header className={classes.header}>
    <nav>
      <ul>
        <button>
        <Link  to="/ProfilePage/Completed"><h4>Completed</h4></Link>
        </button>
        <button>
        <Link  to="/ProfilePage/Ongoing"><h4>Ongoing</h4></Link>
        </button>
        <button>
        <Link  to="/ProfilePage/Remaining"><h4>Remaining</h4></Link>
        </button>
      </ul>
    </nav>
  </header>
  );
};

export default BottomHeader