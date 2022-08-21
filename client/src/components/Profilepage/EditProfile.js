import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import close from "../../images/Close.png";
import user from "../../images/user.png";
import { Marginer } from "../loginPage/marginer";
import classes from "./EditProfile.module.css";

const EditProfile = (props) => {
  const [branch, setbranch] = useState();
  // const [interests, setinterests] = useState([]);
  const [interest1, setinterest1] = useState("");
  const [interest2, setinterest2] = useState("");
  const [interest3, setinterest3] = useState("");
  const [description, setdescription] = useState();
  let id = props.id;
  async function updatedata() {
    //This is the function which updates the data
    //A pop up should open asking for which data you need to update
    //For now let us try updating some data
    let interests;
    let setting = false;
    let body;
    if (interest1 !== "" || interest2 !== "" || interest3 !== "") {
      interests = [interest1, interest2, interest3];
      body = {
        branch,
        interests,
        description,
      };
    } else {
      body = {
        branch,
        description,
      };
    }

    let data = await fetch(
      `http://localhost:3001/api/student/profile/updateprofile/${id.current}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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
    <div className={classes.boxcontainer}>
      <div classname={classes.close}>
        <img onClick={props.closeEditProfile} src={close}></img>{" "}
      </div>
      <form className={classes.formcontainer}>
        <h2>Edit Profile</h2>
        <img src={user}></img>
        <input
          className={classes.inputcontainer}
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => {
            setbranch(e.target.value);
          }}
        />
        <input
          className={classes.inputcontainer}
          type="text"
          placeholder="Interest 1"
          value={interest1}
          onChange={(e) => {
            setinterest1(e.target.value);
          }}
        />

        <input
          className={classes.inputcontainer}
          type="text"
          placeholder="Interest 2"
          value={interest2}
          onChange={(e) => {
            setinterest2(e.target.value);
          }}
        />

        <input
          className={classes.inputcontainer}
          type="text"
          placeholder="Interest 3"
          value={interest3}
          onChange={(e) => {
            setinterest3(e.target.value);
          }}
        />

        <input
          className={classes.inputcontainer}
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />

        {/* <input
      className={classes.inputcontainer}
      type="password"
      placeholder="Password"
      
    /> */}

        {/* <input className={classes.inputcontainer}
    
    placeholder="Domain interested" />

    <input
      className={classes.inputcontainer}
      type="number"
      placeholder="Phone Number"
      
    /> */}
      </form>

      <Marginer direction="vertical" margin="2em" />
      <button
        className={classes.submitbutton1}
        type="submit"
        onClick={updatedata}
      >
        Save
      </button>
      <Marginer direction="vertical" margin="2em" />
    </div>
  );
};

export default EditProfile;
