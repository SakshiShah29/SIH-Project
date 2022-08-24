import React, { useState } from "react";
import { useQuery } from "react-query";
import { Marginer } from "./marginer";
import { useWalletaddress } from "../../Stores/wallet-context";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Head from "./Head";
import classes from "./Showevent.module.css"
import Button from "../Profilepage/Button";
export default function Showevent(props) {
  const [progress,setprogress]=useState(false);
  const walletaddressfinal=props.walletaddress;
  console.log('This is the wallet address passed to the ShowEvent');
  console.log(walletaddressfinal);
  // let { walletaddress } = props;
  let walletaddress="0xE27E8bE768b01070F4eb12523e8a52F8D682F1Fa";
  let [shown, setshown] = useState(true);
  let [title, settitle] = useState();
  let [abstract, setabstract] = useState();
  let [path, setpath] = useState();
  function plagiarismover(final, data) {
    console.log("The plagiarism detection is over and we have got the results");
    console.log(final);
    console.log("This is the data for that given project");
    console.log(data);

    //If the msg is the plagiarism is not detected then change the projectstatus from pending to approved
    //Otherwise if plagiarism is detected then in that case change the projectstatus to rejected
    //Also remove the project from the project uploads after notifying the student that the project has not been approved
  }
  
  
  async function plagiarismchecking(data) {
    //Now as we have the data available with us let us code the backend to implement the functionality of plagiarism detection
    // alert("90 % plagiarism detected");
    console.log("This is the data for plagiarism detection");
    console.log(data);
    // const homeDir = os.homedir();
    // const desktopDir = `${homeDir}/Desktop`;
    let path1 = `${path}/titles`;
    let path2 = `${path}/abstracts`;
    let res = await fetch("http://localhost:3001/api/plagiarism/check", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        data,
        path1,
        path2,
      }),
    });

    let final = await res.json();
    console.log("This is the response received from the backend");
    plagiarismover(final, data);
    console.log(final);
  }

  
  

  function DisplayProject(props) {
    let { obj } = props;
    //So the prop has the object which contains the projectid
    console.log(obj.projectId);
    console.log(typeof obj.projectId);
    let { isLoading, data } = useQuery([obj.projectId], () =>
      fetch(`http://localhost:3001/api/student/projectupload/${obj.projectId}`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
    );

    if (isLoading) {
      return <div>The data is still loading in display project part</div>;
    }

    console.log(data, "This is the project details");
    const percentage = 66;
    return (
      <div className={classes.card}>
     
      <div className={classes.upper}>
        <div className={classes.details}>
        <p>{data.data.title}</p>
        <br />
        {data.data.abstract}
        <br />
        </div>
        
        <button className={classes.btn1} href={data.data.projecturl}>
          {" "}
       download the project
        </button>
        <br />
        {/* <label>Enter the path of the Desktop</label>;
            <input
              value={path}
              onChange={(e) => {
                setpath(e.target.value);
              }}
            ></input> */}
            <div className={classes.btnsection}>
        <Button onClick={ () =>plagiarismchecking(data.data)}>
          Check for plagiarism
        </Button>
        </div>
  
      </div>
      </div>
    );
  }
  console.log(
    "This is the wallet address of the admin that was passed to the backend"
  );
  console.log(walletaddress);
  let { isLoading, data } = useQuery(
    "adminevents",
    () =>
      fetch(
        `http://localhost:3001/api/admin/eventdetails/${walletaddress.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
    {
      refetchInterval: 30000,
    }
  );

  if (isLoading) {
    return <div>The events are still loading</div>;
  }

  //Now data.data is an array which contains all the pending requests
  //From the data.data there is a key which is projectid we fetch the project details from the ids
  //For that we use the concept of react query
  console.log(data, "This is the data for the project details");

  return(
    <div className={classes.body}>
    <Head/>
    <FinalDisplay/>
    </div>
  )

  function FinalDisplay(){
    return data.data.map((ele) => {
      return <DisplayProject obj={ele} />;
    });
  }
  

  // return null;
  // let title;
  // let abstract;
  // data.data.map(async (ele) => {
  //   console.log(ele.projectId);
  //   let data2 = await fetch(
  //     `http://localhost:3001/api/student/projectupload/${ele.projectId}`
  //   ).then((res) => res.json());

  //   console.log(data2);
  //   console.log(data2.data.title);
  //   // title = data2.data.title;
  //   console.log(data2.data.abstract);
  //   // abstract = data2.data.abstract;
  //   setshown(false);
  //   settitle((olddata) => {
  //      return data2.data.title;
  //   });
  //   setabstract((olddata) => {
  //     return data2.data.abstract
  //   });
  // });

  // console.log(title);
  // console.log(abstract);

  // // function Tp() {
  // //   return <div>Hello</div>;
  // // }

  // if (shown) {
  //   return <div>Hello</div>;
  // }

  // return (
  //   <div>
  //     {/* Please run */}
  //     {title}
  //     <br />
  //     {abstract}
  //   </div>
  // );

  // {
  //   await data.data.map(async (ele) => {
  //     //Now here we have the element available with us and this element is an array
  //     let data2 = await fetch(
  //       `http://localhost:3001/api/student/projectupload/${ele.projectId}`
  //     ).then((res) => res.json());

  //     //Now this data2 contains the data
  //     console.log(data2);
  //     _data = data2;
  //   });
  // }
}
