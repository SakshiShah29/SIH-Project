import React from "react";
import classes from "./Details.module.css";
import edit from "../../images/edit.png";
function Details(props) {
  let id = props.id;
  // console.log("This is the id", id);
  //From the props the user id should also be passed
  async function updatedata() {
    //This is the function which updates the data
    //A pop up should open asking for which data you need to update
    //For now let us try updating some data
    let data = await fetch(
      `http://localhost:3001/api/student/profile/updateprofile/${id.current}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch: "Information Technology",
        }),
      }
    ).then((res) => {
      return res.json();
    });

    await console.log(
      data,
      "This is the data that is returned after updating the profile"
    );
  }
  return (
    <div className={classes.details}>
      <div className={classes.upper}>
        <h2>{props.username}</h2>
        <img src={edit} onClick={props.onEdit}></img>
      </div>
      <h4>{props.institute}</h4>
      <h4>{props.branch}</h4>
      <h4 style={{marginRight:"10px"}}>{props.interests}</h4>
      <h4>{props.description}</h4>
    </div>
  );
}

export default Details;
