import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Profilepage from "./components/Profilepage/Profilepage";
import HomePage from "./components/homePage/homePage";
// import ProjectUpload from './components/projectUpload/projectUpload';
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Completed from "./components/Profilepage/Completed ";
import Ongoing from "./components/Profilepage/Ongoing";
import Remaining from "./components/Profilepage/Remaining";
// import UploadProject from "./components/ipfs/UploadProject2";
// import Chat from "./components/Chat/Chat";
import Wallet from "./components/ipfs/connectwallet";
import Auth from "./components/Auth/Auth.jsx";
import Chatapplication from "./components/Chatapplicationfinal/Chat.jsx";
import Profileid from "./components/Chatapplication2/Profileid";
import Chat from "./components/Chatapplication2/Chat";

function App() {
  return (
    <>
      {/* <Profilepage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Chat" element={<Chatapplication />} /> */}
          {/* <Route path="/" element={<Chatapplication />} /> */}
          {/* <Route path="/" element={<Chatlogin />} /> */}
          <Route path="/landingPage" element={<LandingPage />} />
          {/*<Route path="/projectUpload" element={<ProjectUpload />} />*/}
          <Route path="/ProjectDetails" element={<ProjectDetails />} />
          <Route path="/Chatprofile" element={<Chat />} />
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
    </>
  );
}

export default App;
