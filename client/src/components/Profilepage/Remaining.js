import React, { useEffect, useLayoutEffect, useState } from "react";
import { Fragment } from "react";
import classes from "./Remaining.module.css";
import Card from "./Card";
let finaldataarray = [];

const Remaining = (props) => {
  let [done, setdone] = useState(false);
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
              setdone(true);
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
  //Now we need to loop through the array and find these following things
  //Firstly we need to find the university of the student
  //Secondly we need to find the title of the project
  //Thirdly we also need to find the tech stack for the project

  // arr.forEach(async (element) => {
  //   // let _data;
  //   console.log("This is printed before the ui mounting");
  //   let _data = fetch(
  //     `http://localhost:3001/api/student/projectupload/${element}`
  //   ).then((res) => {
  //     return res.json();
  //   });
  //   console.log(_data);
  //   console.log("Now pushing the element");
  //   finaldataarray.push(_data);
  // });

  // useEffect(() => {
  //   function getdata() {
  //     arr.forEach(async (element) => {
  //       // let _data;
  //       console.log("This is printed before the ui mounting");
  //       let _data = await fetch(
  //         `http://localhost:3001/api/student/projectupload/${element}`
  //       ).then((res) => {
  //         return res.json();
  //       });
  //       console.log(_data);
  //       console.log("Now pushing the element");
  //       await finaldataarray.push(_data);
  //     });

  //     setdatagot(true);
  //   }

  //   getdata();
  // }, []);

  // const promises = arr.map((element) => {
  //   return fetch(
  //     `http://localhost:3001/api/student/projectupload/${element}`
  //   ).then((response) => {
  //     return response.json();
  //   });
  // });

  // Promise.all(promises).then((results) => {
  //   finaldataarray = results.map((result) => result.items[0]);
  //   setdatagot(true);
  // });

  console.log(finaldataarray[0], "This is the final data array");
  // console.log("Ok this is printed after the for loop");

  // function Cards() {
  //   return (
  //     <Fragment>
  //       <h3>Remaining Projects</h3>
  //       <div className={classes.body}>
  //         <Card tag="Remaining" title={"Don"} />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //         <Card tag="Remaining" />
  //       </div>
  //     </Fragment>
  //   );
  // }

  function Cards() {
    if (finaldataarray.length == 0) {
      return (
        <div>The data is still loading or no pending projects are found</div>
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
};

export default Remaining;
