import React from 'react'
import {Link} from "react-router-dom"
import classes from "./BottomHeader.module.css"
function BottomHeader() {
  return (
    <header className={classes.header}>
    <nav>
      <ul>
        <button>
        <Link  to="/ProfilePage/Completed"><p>Completed</p></Link>
        </button>
        <button>
        <Link  to="/ProfilePage/Ongoing"><p>Ongoing</p></Link>
        </button>
        <button>
        <Link  to="/ProfilePage/Remaining"><p>Remaining</p></Link>
        </button>
      </ul>
    </nav>
  </header>
  );
};

export default BottomHeader