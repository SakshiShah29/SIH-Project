import React from "react";
import User from "./User";

import Details from "./Details";
import classes from "./Navbar.module.css";
import Button from "./Button";
const Navbar = (props) => {
  let { username, institute, branch, interests, description, id } = props;
  return (
    <div className={classes.navbar}>
      <User />
      <Details
        username={username}
        institute={institute}
        branch={branch}
        interests={interests}
        description={description}
        id={id}
        onEdit={props.onEdit}
      />
      <div className={classes.btn}>
        <Button onClick={props.onMessage}>Message</Button>
        <Button onClick={props.onClick}>Upload Project</Button>
      </div>
    </div>
  );
};

export default Navbar;
