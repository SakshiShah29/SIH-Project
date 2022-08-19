import React from "react";
import "./Card.css";
const Card = (props) => {
  //We need to pass some data inside these cards
  let { title, abstract } = props;
  return (
    <div class="homeCard">
      <span class="badge rounded-pill bg-color text-bg-primary">
        {props.tag}
      </span>
      <p className="cardTitle">{title}</p>
      <p className="cardSubtitle">{abstract}</p>
      {/* <div className="tech-stack">
        <p> Machine Learning</p>
        <p> LSTM</p>
        <p> Python</p>
        <p> NLP</p>
      </div> */}
    </div>
  );
};

export default Card;
