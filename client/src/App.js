import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Profilepage from "./components/Profilepage/Profilepage";
import HomePage from "./components/homePage/homePage";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Completed from "./components/Profilepage/Completed ";
import Ongoing from "./components/Profilepage/Ongoing";
import Remaining from "./components/Profilepage/Remaining";
import Wallet from "./components/ipfs/connectwallet";
import Auth from "./components/Auth/Auth.jsx";
import Showevent from "./components/loginPage/Showevents";
import Filter from './components/filter/Filter'
import ProjectContext from "./components/contexts/ProjectdetailProvider";
// import WalletContext from "./Stores/wallet-context";





function App() {
  let [walletaddress, setwalletaddress] = useState('')
  let [projectdetails, setprojectdetails] = useState({})

  return (
    <>
      {/* <Profilepage /> */}
      <ProjectContext.Provider value={{ projectdetails, setprojectdetails }}>
        <Router>
          <Routes>
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/filter" element={<Filter />} />

            <Route
              path="/Showevent"
              element={<Showevent walletaddress={walletaddress} />}
            />
            {/* // <Route path="/Chat" element={<Chatapplication />} /> */}
            {/* <Route path="/" element={<Chatapplication />} /> */}
            {/* <Route path="/" element={<Chatlogin />} /> */}
            <Route
              path="/"
              element={
                <LandingPage
                  walletaddress={walletaddress}
                  setwalletaddress={setwalletaddress}
                />
              }
            />
            {/*<Route path="/projectUpload" element={<ProjectUpload />} />*/}
            <Route path="/ProjectDetails" element={<ProjectDetails />} />
            <Route
              path="/ProfilePage"
              element={
                <div>
                  <Profilepage />
                  {/* <Completed /> */}
                </div>
              }
            />
            <Route
              path="/ProfilePage/Completed"
              element={
                <div>
                  <Profilepage />
                  {/* <Completed /> */}
                </div>
              }
            ></Route>
            <Route
              path="/ProfilePage/Ongoing"
              element={
                <div>
                  <Profilepage />
                  {/* <Ongoing /> */}
                </div>
              }
            ></Route>
            <Route
              path="/ProfilePage/Remaining"
              element={
                <div>
                  <Profilepage />
                  {/* <Remaining /> */}
                </div>
              }
            ></Route>
            <Route path="/UploadProject" element={<Wallet />}></Route>
            {/* <Route path="/UploadProject2" element={<UploadProject />}></Route> */}
            {/* <Route path="/Chat" element={<Chat />}></Route> */}
          </Routes>
        </Router>
      </ProjectContext.Provider>
    </>
  );
}

export default App;
