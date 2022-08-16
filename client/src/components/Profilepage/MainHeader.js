import React, { Fragment } from "react";
import Logout from "./Logout"
import classes from "./MainHeader.module.css";
import Navbar from "./Navbar";
import arrow from "../../images/Vector.png"
import { Link } from "react-router-dom";
function MainHeader(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.upper}>
          <Link to="/"><a><img src={arrow}></img></a></Link>
          <Link to="/landingPage"><Logout/></Link>
        </div>
        <Navbar />
      </div>
    </Fragment>
  );
}

export default MainHeader;
