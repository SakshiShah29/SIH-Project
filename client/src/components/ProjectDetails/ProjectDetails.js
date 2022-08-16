import React, { Fragment } from "react";
import classes from "./ProjectDetails.module.css";
import Navbar from "../Navbar/Navbar";
import CardUi from "./CardUi";
import CommentSection from "./CommentSection";

const ProjectDetails = (props) => {
  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      <div className={classes.bottomContainer}>
        <h3>{props.title}</h3>
        <div className={classes.upper}>
          <div className={classes.details}>
            <h4>Abstract</h4>
            <p>
              Cupidatat et dolor aute exercitation duis tempor pariatur est
              consequat est aliqua non non. Amet cupidatat commodo laborum Lorem
              ullamco labore amet eu fugiat cillum eu qui excepteur sit.
              Consequat proident ipsum ipsum nostrud aliquip ad commodo ipsum
              cillum aliquip amet in ea. Dolor minim id laboris sunt duis ipsum.
              Aute aliquip magna cillum do aliquip anim exercitation. Dolore
              dolore eu exercitation cillum culpa cupidatat culpa et aliquip
              laborum irure adipisicing minim.
            </p>
          </div>
          <CardUi />
        </div>
        <div className={classes.centerButton}>
        <button className={classes.btn}>Want to Collaborate?</button>
        </div>
        <div className={classes.comment}>
        <CommentSection/>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectDetails;
