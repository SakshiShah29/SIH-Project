import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Card from "./Card";
import classes from "./Ongoing.module.css";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Skeleton from "@mui/material/Skeleton";
import Youtube from "./Loading";
let finaldataarray = [];

const Ongoing = (props) => {
  let [datagot, setdatagot] = useState(false);
  //Inside the remaining projects we have passed the project id that is to be displayed
  // console.log("We are now inside the pending projects section");
  let arr = props.projects;
  console.log(arr);

  useEffect(() => {
    async function getdata() {
      await arr.forEach(async (element) => {
        // let _data;
        console.log("This is printed before the ui mounting");
        await fetch(
          `http://localhost:3001/api/student/projectupload/${element}`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (finaldataarray.length === arr.length) {
            } else {
              finaldataarray = [...finaldataarray, data.data];
            }
          });
        // await console.log(_data);
        // await console.log("Now pushing the element");
        // await finaldataarray.push(_data);
      });
    }
    getdata();
    setdatagot(true);
  }, [arr]);
  //   return (
  //     <Fragment>
  //     <h3>Completed Projects</h3>
  //     <div className={classes.body}>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  // <Card tag="Completed"/>
  //     </div>
  //     </Fragment>
  //   )

  function Cards() {
    if (finaldataarray.length == 0) {
      return (
        // <div style={{ height: 100 }}>
        //   The data is still loading or no pending projects are found
        // </div>
        <Youtube style={{ outerHeight: "100vh" }} />
      );
    }
    return (
      <Fragment>
        <h3>Remaining Projects</h3>
        <div className={classes.body}>
          {finaldataarray.map((ele) => {
            return (
              <Card
                tag="Remaining"
                title={`${ele.title}`}
                abstract={`${ele.abstract}`}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }

  return (
    <div>
      {datagot && <Cards />}
      {!datagot && "The data is being fetched"}
    </div>
  );
  // return (
  //   <Fragment>
  //     <h3>Ongoing Projects</h3>
  //     <div className={classes.body}>
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />
  //       <Card tag="Ongoing" />c
  //       <Card tag="Ongoing" />
  //     </div>
  //   </Fragment>
  // );
};

export default Ongoing;
