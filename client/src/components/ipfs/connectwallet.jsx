import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";
// import getWeb3 from "./getWeb3";

import Context from "./context";
import Ipfs from "./Ipfs";
import Uploadproject from "./Uploadproject";

//The context that is imported now has a provider and we can use this provider to pass the object to all the child components

export default function Wallet() {
  const [walletaddress, setwalletaddress] = useState("");
  const [uploadpart, setuploadpart] = useState(false);
  const [exists, setexists] = useState(false);
  let [errorpart, seterrorpart] = useState(false);
  let obj = useRef();

  //Once the wallet is connected and we get the details of the account we now import the account details of the admin
  useEffect(() => {
    async function fetchadmindetails() {
      let finaldata = {};
      let _data = document.cookie.split(";");
      console.log("These are all the cookies", _data);
      await _data.forEach((element, i) => {
        let temp = element.split("=");
        let key = temp[0];
        console.log(typeof key);
        let value = temp[1];
        console.log(key, "This is now the value", value);
        let tempobj = {
          [`${key}`]: value,
        };
        Object.assign(finaldata, tempobj);
        console.log(finaldata);
      });
      let value1 = "jwt";
      let _jwt = finaldata.jwt;
      let res = await fetch(
        "http://localhost:3001/api/student/projectupload/details",
        {
          method: "GET",
          headers: {
            // jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGhydXZzb25pMTgwMkBnbWFpbC5jb20iLCJzdHVkZW50Ijp0cnVlLCJhZG1pbiI6ZmFsc2UsIm1hc3RlcmFkbWluIjpmYWxzZSwiZmFjdWx0eSI6ZmFsc2UsImlhdCI6MTY2MDE3MTI4NiwiZXhwIjoxNjY3OTQ3Mjg2fQ.brIsHg-hgos5tZQiA62tUdQGNy0HcQDty_EgUvvVfkk",
            jwt: _jwt,
          },
        }
      );

      let data = await res.json();
      data.useraddress = walletaddress;
      console.log("This is the data that is returned after ");
      console.log(data);
      console.log("This is the data that is returned from the backend");
      if (data.error) {
        seterrorpart(true);
      } else {
        obj.current = data;

        setuploadpart(true);
      }
    }
    if (walletaddress == "") {
    } else {
      fetchadmindetails();
    }
  }, [walletaddress]);

  function WalletConnect() {
    return (
      <div>
        <h1>Hello Student</h1>
        <button onClick={connectwallet}>Connect to the wallet</button>
        {exists && (
          <div>
            <p>{walletaddress}</p>
          </div>
        )}
      </div>
    );
  }

  //   const [state, setstate] = useState({
  //     _web3: null,
  //   });

  //   useEffect(() => {
  //     async function get() {
  //       console.log("The function is ran!");
  //       let web3 = await getWeb3();
  //       console.log(web3);
  //       setstate({ _web3: web3 });
  //     }

  //     get();
  //   });

  //This is the useEffect which runs once the wallet address is changed
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

      console.log(accounts);
      console.log(accounts[0]);

      // Ok so we now have the student address available with us. We also need the admin address and after we get both of these(context api)
      //If the admin details are not available the smart contract will trigger an event to the master admin indicating that the admin
      //assigned is pending
      //The next step is to upload all the details of the project
      //Now we upload all the details. Once all the details are uploaded the next step is to upload the project on the ipfs
      //Now the ipfs link that is generated along with the data that is uploaded in the database is send to the admin
      //Basically an event is emitted to the admin indicating that the student has uploaded the project
      //Hence the admin will only see the list of pending project requests based on the entry of the project
      //In the meanwhile this transaction is recorded in the blockchain to indicate the openness of the system
      //Now the admin first checks the project himself/herself first to identify the uniqueness or creativity of it
      //Then the plagiarism detection function is ran.
      //Till here the project will be said to be in the status of not approved
      //Now once the plagiarism detection function approves the project the project is moved to the status of approved
      //Hence the database is once again updated

      setwalletaddress(accounts.toString());
      console.log(walletaddress);

      //This means that we now have the wallet address available with us now is the time to change the view to true
      console.log(
        "The wallet address is printed before setting the data to true"
      );
      //   let walletbalance = await state._web3.eth.getBalance(accounts.toString());
      //   setwalletbalance(state._web3.utils.fromWei(walletbalance, "ether"));
      setexists(true);
    } else {
      alert("The metamask wallet is not detected");
    }
  }

  if (errorpart) {
    return <div>The user needs to log in to access the profile</div>;
  }
  //<Ipfs />
  return (
    <Context.Provider value={obj}>
      {!uploadpart ? <WalletConnect /> : <Uploadproject />}
    </Context.Provider>
  );
}
