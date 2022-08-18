import React, { useState, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

// import { Route, Router, Routes } from "react-router-dom"
import BottomHeader from "./BottomHeader";
import MainHeader from "./MainHeader";
// import Completed from './Completed '
// import Ongoing from './Ongoing'
// import Remaining from './Remaining'

let idglobal;
let jwtglobal;
const Profilepage = () => {
  let id = useRef();
  let jwtfinal = useRef();
  let userdata = useRef();
  let userdata2 = useRef();
  const navigate = useNavigate();

  function onClick() {
    navigate("/UploadProject");
  }
  //When the profile page is going to be displayed the first step is to check whether the user is authorized or not
  //But for getting the data we need the id
  //The id can be obtained from the jwt
  //If the user is authorized then we will get the profile data
  useLayoutEffect(() => {
    //check local token or something
    async function getid() {
      let finaldata = {};
      let _data = await document.cookie.split(";");
      await _data.forEach((element, i) => {
        let temp = element.split("=");
        let key = temp[0];
        let value = temp[1];
        let tempobj = {
          [`${key}`]: value,
        };
        Object.assign(finaldata, tempobj);
      });
      let _jwt = finaldata.jwt;
      jwtglobal = finaldata.jwt;
      jwtfinal.current = finaldata.jwt;
      // console.log("This is the jwt token", _jwt);

      let data2 = await fetch("http://localhost:3001/api/student/getdetails", {
        method: "POST",
        body: JSON.stringify({
          _jwt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response.json();
      });

      // console.log("This is the data we get after verifying the jwt", data2);
      id.current = data2.data;
      idglobal = data2.data;
      userdata.current = data2.data2[0];

      //Ok so we now have the jwt for the profile
      //The next step is to get the data from the jwt
      //There are actually two approaches
      //When accessing myprofile we need to id for us which is available from the jwt
      //When accessing other person's profile we need the id for that other person which cannot be obtained from jwt
      //Since here we are accessing myprofile we are going to take the id via jwt
    }

    getid();
  }, []);

  console.log("This is the global id", idglobal);

  // console.log(
  //   "This is the id that is printed before the react query is used",
  //   id
  // );

  // console.log(
  //   "This is also the user data that is printed before the query is ran",
  //   userdata
  // );
  let { isLoading, data, isError } = useQuery(`${idglobal}`, () =>
    fetch(`http://localhost:3001/api/student/profile/${idglobal}`, {
      method: "GET",
      headers: {
        jwt: jwtglobal,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
  );

  if (isLoading) {
    return <div>The data is still loading from the backend</div>;
  }

  if (isError) {
    console.log(isError);
    return <div>There is some error while fetching the data</div>;
  }

  // console.log(data.data.branch);

  function backtohomepage() {
    navigate("/landingpage");
  }

  if (data.error) {
    return (
      <div>
        <h1>{data.error}</h1>
        <button onClick={backtohomepage}>Back to the login page</button>
      </div>
    );
  }

  //This means that there is no error while the data is returned from the backend and that the data can be displayed to the UI

  const handleUploadProject = () => {
    navigate("/UpladProject");
  };
  const handleMessage = () => {
    navigate("/Chat");
  };
  return (
    <div>
      <MainHeader
        name={userdata.current.Name}
        institute={userdata.current.Institute}
        branch={data.data.branch}
        interests={["Dummy data", "Dummy data"]}
        description={"Hello this is my description"}
        id={id}
        onClick={onClick}
      />
      <BottomHeader id={idglobal} />
    </div>
  );
};

export default Profilepage;

// <main>
// <Router>
// <Routes>
// <Route path='/Completed' element={<Completed/>}></Route>
// <Route path="/Ongoing" element={<Ongoing/>}></Route>
// <Route path="/Remaining" element={<Remaining/>}></Route>
// </Routes>
// </Router>
// </main>
