import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./BottomHeader.module.css";
import Completed from "./Completed ";
import Ongoing from "./Ongoing";
import Remaining from "./Remaining";
function BottomHeader(props) {
  console.log(
    "These are the props that are passed to the bottom header component from the ProfilePage component"
  );
  const [completed, setcompleted] = useState(true);
  const [ongoing, setongoing] = useState(false);
  const [pending, setpending] = useState(false);
  console.log(props);
  let { id } = props;

  function btno() {
    setcompleted(false);
    setpending(false);
    setongoing(true);
  }

  function btnc() {
    setcompleted(true);
    setpending(false);
    setongoing(false);
  }

  function btnp() {
    setcompleted(false);
    setpending(true);
    setongoing(false);
  }
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <button onClick={btnc}>
              {/* <Link to="/ProfilePage/Completed"> */}
              <p>Completed</p>
              {/* </Link> */}
            </button>
            <button onClick={btno}>
              {/* <Link to="/ProfilePage/Ongoing"> */}
              <p>Ongoing</p>
              {/* </Link> */}
            </button>
            <button onClick={btnp}>
              {/* <Link to="/ProfilePage/Remaining"> */}
              <p>Remaining</p>
              {/* </Link> */}
            </button>
          </ul>
        </nav>
      </header>
      <div>
        {completed && <Completed id={id} />}
        {pending && <Remaining id={id} />}
        {ongoing && <Ongoing id={id} />}
      </div>
    </>
  );
}

export default BottomHeader;
