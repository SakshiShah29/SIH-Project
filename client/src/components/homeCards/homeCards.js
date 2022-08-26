import React, { useContext, useState } from "react";
import "./homeCards.css";
import { useNavigate } from "react-router-dom";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ProjectContext from "../contexts/ProjectdetailProvider";
const HomeCards = (props) => {
  let obj = useContext(ProjectContext);
  console.log("This is the object", obj);
  let { projectdetails, setprojectdetails } = obj;
  console.log('This is the project detail', projectdetails);
  const [cardclicked, setcardclicked] = useState(false);

  let { rest } = props;
  // console.log(
  //   rest,
  //   "This is the card data that was passed from the home cards"
  // );
  const navigate = useNavigate();
  const handleProjectHomeCLick = () => {
    // navigate("/ProjectDetails");
    setprojectdetails(rest);
    setcardclicked(true);
  };
  return (
    <>
      {!cardclicked && (
        <div className="homeCard" onClick={handleProjectHomeCLick}>
          {/* <span className="badge rounded-pill bg-color text-bg-primary">
            Completed
          </span> */}
          <p className="cardTitle">{props.title}</p>
          <p className="cardSubtitle">{props.university}</p>
          <div className="tech-stack-home">
            <p> <span className="d-inline-block circle"></span> Machine Learning</p>
            <p> <span className="d-inline-block circle"></span> LSTM</p>
            <p> <span className="d-inline-block circle"></span> Python</p>
            <p> <span className="d-inline-block circle"></span> NLP</p>
          </div>
        </div>
      )}
      {cardclicked && (
        navigate('/ProjectDetails')
      )}
    </>
  );
};

export default HomeCards;
