//Now this is the implementation of the master admin
//Hence this path is only accessible by the master admin of the smart contract

import React, { useState, useEffect } from "react";
export default function Masteradmin() {
  let [masteradmin, setmasteradmin] = useState("");
  let [privatekey, setprivatekey] = useState("");
  let [admin, setadmin] = useState("");
  let [university, setuniversity] = useState("");

  const [walletaddress, setwalletaddress] = useState("");
  const [walletbalance, setwalletbalance] = useState("");
  const [exists, setexists] = useState(false);

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

      setmasteradmin(accounts[0]);

      console.log(accounts);
      //   setwalletaddress(accounts.toString());
      //   let walletbalance = await state._web3.eth.getBalance(accounts.toString());
      //   setwalletbalance(state._web3.utils.fromWei(walletbalance, "ether"));
      setexists(true);
    } else {
      alert("The metamask wallet is not detected");
    }
  }

  async function login() {
    const res = await fetch("http://localhost:3001/api/admin/masteradmin", {
      method: "POST",
      body: JSON.stringify({
        masteradmin,
        privatekey,
        admin,
        university,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.error) {
      alert(
        "The addition has failed and the transaction has been reverted back"
      );
    } else {
      alert("The addition of admin is successful");
    }
    console.log(data);
  }

  return (
    <div>
      <button onClick={connectwallet}>Connect to the wallet</button>
      {exists && (
        <div>
          <label>Enter your private key</label>
          <input
            type={"password"}
            value={privatekey}
            onChange={(e) => {
              setprivatekey(e.target.value);
            }}
          ></input>

          <label>
            Enter the admin address you want to assign to the university
          </label>
          <input
            type={"string"}
            value={admin}
            onChange={(e) => {
              setadmin(e.target.value);
            }}
          ></input>

          <label>Enter the university where the admin belongs</label>
          <input
            type={"string"}
            value={university}
            onChange={(e) => {
              setuniversity(e.target.value);
            }}
          ></input>

          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

// export default Masteradmin;
