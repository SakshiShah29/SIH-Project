import React from "react";
import uni from "../../images/uni.png";
import avatar from "../../images/user-icon.png";
import "./CardUi.css";
const CardUi = (props) => {
  let { rest } = props;
  return (
    <div className="Card">
      <div className="upper">
        <img src={uni} alt="university" className="uni"></img>
        <p className="cardSubtitle">{rest.university}</p>
      </div>

      <div className="tech-stack">
        <h4>Technology Stack:</h4>
        <p> Machine Learning</p>
        <p> LSTM</p>
        <p> Python</p>
      </div>

      <div className="collaborators">
        <h4>Collaborators:</h4>
        <div className="images">
          <img src={avatar} alt="profile"></img>
          <img src={avatar} alt="profile"></img>
          <img src={avatar} alt="profile"></img>
        </div>
      </div>
    </div>
  );
};

export default CardUi;
