import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import classes from "./BottomHeader.module.css";
import Completed from "./Completed ";
import Ongoing from "./Ongoing";
import Remaining from "./Remaining";
function BottomHeader(props) {
  const [completed, setcompleted] = useState(true);
  const [ongoing, setongoing] = useState(false);
  const [pending, setpending] = useState(false);
  let { id } = props;

  console.log(id);

  //Now based on the id that is available with us we find the data for the completed pending and ongoing projects
  let { isLoading, data, isError } = useQuery(`${id}`, () =>
    fetch(`http://localhost:3001/api/student/profile/${id}`, {
      headers: {
        jwt: "Not required",
      },
    })
      .then((res) => res.json())
      .then((data) => data)
  );

  if (isLoading) {
    return <div>The data is still loading..</div>;
  }

  console.log(
    "This is the data for the profile that was passed from the backend component"
  );
  console.log(data);

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
        {completed && <Completed projects={data.data.completed_projects} />}
        {pending && <Remaining projects={data.data.pending_projects} />}
        {ongoing && <Ongoing projects={data.data.ongoing_projects} />}
      </div>
    </>
  );
}

export default BottomHeader;
