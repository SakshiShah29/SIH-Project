import React, { Fragment } from "react";
import Logout from "./Logout";
import classes from "./MainHeader.module.css";
import Navbar from "./Navbar";
import arrow from "../../images/Vector.png";
import { Link } from "react-router-dom";
function MainHeader(props) {
  let { name, institute, branch, interests, description, id } = props;
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.upper}>
          <Link to="/">
            <a>
              <img src={arrow}></img>
            </a>
          </Link>
          <Link to="/">
            <Logout />
          </Link>
        </div>
        <Navbar
          onClick={props.onClick}
          onEdit={props.onEdit}
          onMessage={props.onMessage}
          username={name}
          institute={institute}
          branch={branch}
          interests={interests}
          description={description}
          id={id}
        />
      </div>
    </Fragment>
  );
}

export default MainHeader;
