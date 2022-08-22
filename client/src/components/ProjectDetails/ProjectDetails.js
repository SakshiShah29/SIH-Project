import React, { Fragment } from "react";
import classes from "./ProjectDetails.module.css";
import Navbar from "../Navbar/Navbar";
import CardUi from "./CardUi";
import CommentSection from "./CommentSection";

const ProjectDetails = (props) => {
  let { setcardclicked, rest } = props;
  console.log(
    "This is the data that was passed from the cards to projectdetails",
    rest
  );

  function btnclicked() {
    alert(`This is the profile id of the lead ${rest.leadprofileid}`);
  }

  console.log(typeof setcardclicked);

  console.log(props);

  function backclicked() {
    setcardclicked(false);
  }
  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      <div className={classes.bottomContainer}>
        <h3>{rest.title}</h3>
        <div className={classes.upper}>
          <div className={classes.details}>
            <button onClick={backclicked}>Go back</button>
            <h4>Abstract</h4>
            <p>{rest.abstract}</p>
          </div>
          <CardUi rest={rest} />
        </div>
        <div className={classes.centerButton}>
          <button className={classes.btn} onClick={btnclicked}>
            Want to Collaborate?
          </button>
        </div>
        <div className={classes.comment}>
          <CommentSection />
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectDetails;
