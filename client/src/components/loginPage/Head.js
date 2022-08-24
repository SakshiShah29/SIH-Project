import React, { Fragment } from "react";

import classes from "./Head.module.css";

import arrow from "../../images/Vector.png";
import { Link } from "react-router-dom";
import Logout from "../Profilepage/Logout";

const Head = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.upper}>
          <div className={classes.logo}><h2>Logo</h2></div>
          <Link to="/landingPage">
            <Logout/>
          </Link>
        </div>
       
      </div>
    </Fragment>
  )
}

export default Head