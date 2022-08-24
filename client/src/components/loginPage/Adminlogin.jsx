import React, { useState, useEffect } from "react";
// import getWeb3 from "./getWeb3";
// import Web3 from "web3";
import classes from "./Login.module.css";
import { useQuery } from "react-query";
import { Marginer } from "./marginer";
import { useNavigate } from "react-router";
import Showevent from "./Showevents";

export default function Adminlogin() {
  let [address, setaddress] = useState("");
  let [privatekey, setprivatekey] = useState("");
  const [walletaddress, setwalletaddress] = useState("");
  const [walletbalance, setwalletbalance] = useState("");
  const [exists, setexists] = useState(false);
  const [pending, setshowpending] = useState(false);
  let [path, setpath] = useState();
  let nav = useNavigate();

  const [state, setstate] = useState({
    _web3: null,
  });

  // useEffect(() => {
  //   async function get() {
  //     console.log("The function is ran!");
  //     let web3 = await getWeb3();
  //     console.log(web3);
  //     setstate({ _web3: web3 });
  //   }

  //   get();
  // });
  async function connectwallet() {
    console.log("This is the wallet");
    // console.log(state.web3);
    //Checking if the metamask wallet exists
    if (window.ethereum) {
      console.log("Metamask wallet detected");

      //Now as the metamask wallet is detected we now get the details of all the accounts
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setaddress(accounts[0]);

      console.log(accounts);
      setwalletaddress(accounts.toString());
      //   let walletbalance = await state._web3.eth.getBalance(accounts.toString());
      //   setwalletbalance(state._web3.utils.fromWei(walletbalance, "ether"));
      setexists(true);
    } else {
      alert("The metamask wallet is not detected");
    }
  }

  // function plagiarismover(final, data) {
  //   console.log("The plagiarism detection is over and we have got the results");
  //   console.log(final);
  //   console.log("This is the data for that given project");

  //   //If the msg is the plagiarism is not detected then change the projectstatus from pending to approved
  //   //Otherwise if plagiarism is detected then in that case change the projectstatus to rejected
  //   //Also remove the project from the project uploads after notifying the student that the project has not been approved
  // }

  // async function plagiarismchecking(data) {
  //   //Now as we have the data available with us let us code the backend to implement the functionality of plagiarism detection
  //   // alert("90 % plagiarism detected");
  //   console.log("This is the data for plagiarism detection");
  //   console.log(data);
  //   // const homeDir = os.homedir();
  //   // const desktopDir = `${homeDir}/Desktop`;
  //   let path1 = `${path}/titles`;
  //   let path2 = `${path}/abstracts`;
  //   let res = await fetch("http://localhost:3001/api/plagiarism/check", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       data,
  //       path1,
  //       path2,
  //     }),
  //   });

  //   let final = await res.json();
  //   console.log("This is the response received from the backend");
  //   plagiarismover(final, data);
  //   console.log(final);
  // }

  // function DisplayProject(props) {
  //   let { obj } = props;
  //   //So the prop has the object which contains the projectid
  //   console.log(obj.projectId);
  //   console.log(typeof obj.projectId);
  //   let { isLoading, data } = useQuery([obj.projectId], () =>
  //     fetch(`http://localhost:3001/api/student/projectupload/${obj.projectId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         return data;
  //       })
  //   );

  //   if (isLoading) {
  //     return <div>The data is still loading in display project part</div>;
  //   }

  //   console.log(data, "This is the project details");

  //   return (
  //     <div>
  //       {data.data.title}
  //       <br />
  //       {data.data.abstract}
  //       <br />
  //       <a href={data.data.projecturl}>
  //         {" "}
  //         Click this link to download the project
  //       </a>
  //       <br />
  //       {/* <label>Enter the path of the Desktop</label>;
  //       <input
  //         value={path}
  //         onChange={(e) => {
  //           setpath(e.target.value);
  //         }}
  //       ></input> */}
  //       <button onClick={() => plagiarismchecking(data.data)}>
  //         Check for plagiarism
  //       </button>
  //     </div>
  //   );
  // }

  async function login() {
    const res = await fetch("http://localhost:3001/api/admin/login", {
      method: "POST",
      body: JSON.stringify({
        address,
        privatekey,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.error) {
      alert("The login has failed and the transaction has been reverted back");
    } else {
      alert("The login is successful");
      //Hence this means that the login is done and now its time to show the pending events of the admin
      setshowpending(true);
    }
    console.log(data);
  }

  // function Showevent() {
  //   let [shown, setshown] = useState(true);
  //   let [title, settitle] = useState();
  //   let [abstract, setabstract] = useState();
  //   console.log(
  //     "This is the wallet address of the admin that was passed to the backend"
  //   );
  //   console.log(walletaddress);
  //   let { isLoading, data } = useQuery(
  //     "adminevents",
  //     () =>
  //       fetch(
  //         `http://localhost:3001/api/admin/eventdetails/${walletaddress.toLowerCase()}`
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           return data;
  //         }),
  //     {
  //       refetchInterval: 30000,
  //     }
  //   );

  //   if (isLoading) {
  //     return <div>The events are still loading</div>;
  //   }

  //   //Now data.data is an array which contains all the pending requests
  //   //From the data.data there is a key which is projectid we fetch the project details from the ids
  //   //For that we use the concept of react query
  //   console.log(data, "This is the data for the project details");

  //   return data.data.map((ele) => {
  //     return <DisplayProject obj={ele} />;
  //   });

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
  //}

  return (
    <div>
      {!exists && (
        <button className={classes.submitbutton1} onClick={connectwallet}>
          Connect to the wallet
        </button>
      )}
      <Marginer direction="vertical" margin="1em" />
      {exists && !pending && (
        <div>
          <p>{walletaddress}</p>
          <p>{walletbalance}</p>

          <input
            className={classes.inputcontainer}
            type={"password"}
            value={privatekey}
            placeholder="Enter your private key"
            onChange={(e) => {
              setprivatekey(e.target.value);
            }}
          ></input>
          <div>
            <input
              className={classes.inputcontainer}
              value={path}
              placeholder="Enter the path of desktop"
              onChange={(e) => {
                setpath(e.target.value);
              }}
            ></input>
            ;
          </div>

          <button className={classes.submitbutton1} onClick={login}>
            Login
          </button>
        </div>
      )}
      {pending && <Showevent walletaddress={walletaddress} />}
    </div>
  );
}
