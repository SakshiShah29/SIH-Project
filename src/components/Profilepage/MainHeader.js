import React, { Fragment } from "react";
import Logout from "./Logout"
import classes from "./MainHeader.module.css";
import Navbar from "./Navbar";
import arrow from "../../images/Vector.png"
function MainHeader(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.upper}>
          <a><img src={arrow}></img></a>
          <Logout />
        </div>
        <Navbar />
      </div>
    </Fragment>
  );
}

export default MainHeader;
