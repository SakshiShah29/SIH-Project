//In this file we are going to get the profile id of the user and then pass it to the Chat

import React from "react";
import { useQuery } from "react-query";
export default function Profileid(props) {
  console.log("These are the props that are passed", props);
  let { setid } = props;
  let finaldata = {};
  let _data = document.cookie.split(";");
  _data.forEach((element, i) => {
    let temp = element.split("=");
    let key = temp[0];
    let value = temp[1];
    let tempobj = {
      [`${key}`]: value,
    };
    Object.assign(finaldata, tempobj);
  });
  let _jwt = finaldata.jwt;

  console.log("This is the jwt", _jwt);

  console.log(typeof _jwt);

  //Now once the jwt is found the next step is to extract the profile data from the jwt
  let { data, isLoading } = useQuery("dataforprofile", () =>
    fetch("http://localhost:3001/api/student/getdetails", {
      method: "POST",
      body: JSON.stringify({
        _jwt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    })
  );

  if (isLoading) {
    return <div>Is loading..</div>;
  }

  //   console.log(setid);

  if (_jwt == undefined) {
    return <div>The login session has expired</div>;
  }

  setid(data.data2[0]._id);
  return <div>Hello World</div>;
}
