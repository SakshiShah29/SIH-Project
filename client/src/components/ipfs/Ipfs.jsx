import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMoralis, useMoralisFile } from "react-moralis";
// import getWeb3 from "./getWeb3";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Ipfs(props) {
  let [state, setstate] = useState({
    state: null,
  });

  const seturl = props.url;

  const [file, setFile] = useState();
  const [showModal, setShowModal] = useState(false);
  const [loggedin, setloggedin] = useState(false);
  // const [url, seturl] = useState("");
  // const [description, setdescription] = useState("");
  // const [title, settitle] = useState("");
  const [contentid, setcontentid] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const { saveFile } = useMoralisFile();
  let accounts = useRef(0);
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  // useEffect(() => {
  //   if (window.ethereum) {
  //     console.log("The ethereum account is found");
  //     async function getaccount() {
  //       accounts.current = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });

  //       console.log(accounts.current);
  //     }

  //     getaccount();
  //   } else {
  //     console.log("The user has been logged out and hence there is not");
  //   }
  // }, [loggedin]);

  // useEffect(() => {
  //   // console.log("This is the isAuthenticated variable");
  //   console.log(isAuthenticated);
  //   if (isAuthenticated) {
  //     // add your logic here
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated]);

  // useEffect(() => {
  //   console.log(typeof contentid);
  // }, [contentid]);

  // const login = async () => {
  //   if (!isAuthenticated) {
  //     await authenticate({ signingMessage: "Log in using Moralis" })
  //       .then(function (user) {
  //         console.log("logged in user:", user);
  //         setloggedin(true);
  //         // console.log(account);
  //         // console.log(state.web3.eth.getBalance(user));
  //         // console.log(user.get("ethAddress"));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   } else {
  //     console.log("The user is already authenticated and signed in");
  //     console.log(user);
  //   }
  // };

  // const logOut = async () => {
  //   await logout();
  //   console.log("logged out");
  //   setloggedin(false);
  // };

  // const uploadFile = () => {
  //   const base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
  //   saveFile(
  //     dhruv,
  //     { base64 },
  //     {
  //       type: "base64",
  //       saveIPFS: true,
  //       onSuccess: (result) => console.log(result.ipfs()),
  //       onError: (error) => console.log(error),
  //     }
  //   );
  // };

  // const saveFileIPFS = async () => {
  //   const fileIpfs = await saveFile(f.name, file, { saveIPFS: true });
  //   console.log(fileIpfs);
  // };

  const saveFileIPFS = async (f) => {
    console.log("This is the file");
    console.log("FILE", f);
    const fileIpfs = await saveFile(f.name, file, { saveIPFS: true });
    console.log(fileIpfs._ipfs);
    console.log(typeof fileIpfs._ipfs);
    let result = fileIpfs._ipfs.substring(34);
    console.log(result);
    console.log(typeof result);
    seturl(`https://ipfs.moralis.io:2053/ipfs/${result}`);
    setcontentid(result);
  };

  const handleFinal = () => {
    console.log(typeof file);
    console.log(file);
    saveFileIPFS(file);
    handleClose();
  };

  async function fetchIPFSDoc() {
    console.log(typeof contentid);
    console.log(contentid);
    const url2 = `https://ipfs.moralis.io:2053/ipfs/${contentid}`;
    const url = `https://gateway.moralisipfs.com/ipfs/${contentid}`;
    const response = await fetch(url);
    console.log(response);
    response.redirect();
    console.log("This ran");
    const res = await response.json();
    console.log("This also ran");
    console.log(res);
  }

  function BtnCmp() {
    return (
      <div>
        {/* <button onClick={fetchIPFSDoc}>Get the data</button> */}
        {/* <BrowserRouter> */}
        {/* <Link
          to={{
            pathname: `https://ipfs.moralis.io:2053/ipfs/${contentid}`,
          }}
          target="_blank"
        >
          Click here to download the data
        </Link> */}

        <a href={`https://ipfs.moralis.io:2053/ipfs/${contentid}`}>
          Click here to download or view the data
        </a>
        {/* </BrowserRouter> */}
      </div>
    );
  }

  return (
    <div>
      {/* <h1>Moralis Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>
        Logout
      </button> */}
      {/* <button onClick={saveFileIPFS}>Upload file</button> */}
      {/* <form onSubmit>
        <label>Upload the file</label>
        <input type="file" onChange={(e) => setfile(e.target.files[0])} />
      </form> */}

      <Button variant="warning" onClick={handleShow}>
        Upload File
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload file</Modal.Title>
        </Modal.Header>
        <br />
        <Modal.Body>
          <form>
            {/* <label>Enter the project titles </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            ></input>
            <br />
            <label>Enter the project description </label>
            <input
              type="text"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            ></input> */}
          </form>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Upload the project folder in the compressed form
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="Upload the file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <br />
          <br />
          <Button variant="primary" onClick={handleFinal}>
            Add
          </Button>
          <br />
          <br />
        </Modal.Footer>
      </Modal>

      {/* <BrowserRouter>
        <Route
          path="/privacy-policy"
          component={() => {
            window.location.href = "https://example.com/1234";
            return null;
          }}
        />
      </BrowserRouter> */}
      {contentid.length == 0 ? <p></p> : <BtnCmp></BtnCmp>}
    </div>
  );
}
