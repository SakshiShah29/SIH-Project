import React, { Fragment, useContext } from "react";
import classes from "./ProjectDetails.module.css";
import Navbar from "../Navbar/Navbar";
import CardUi from "./CardUi";
import CommentSection from "./CommentSection";
import ProjectContext from "../contexts/ProjectdetailProvider";

const ProjectDetails = (props) => {
  let obj=useContext(ProjectContext);
  let {projectdetails,setprojectdetails}=obj;
  // let { setcardclicked, rest } = props;
  // console.log(
  //   "This is the data that was passed from the cards to projectdetails",
  //   rest
  // );

  function btnclicked() {
    alert(`This is the profile id of the lead ${projectdetails.leadprofileid}`);
  }

  // console.log(typeof setcardclicked);

  // console.log(props);

  // function backclicked() {
  //   setcardclicked(false);
  // }
  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      <div className={classes.bottomContainer}>
        <h3>{projectdetails.title}</h3>
        <div className={classes.upper}>
          <div className={classes.details}>
           
            <h4>Abstract</h4>
            <p>{projectdetails.abstract}</p>
          </div>
          <CardUi rest={projectdetails} />
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

// // <button onClick={backclicked}>Go back</button>
