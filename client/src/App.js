import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import LandingPage from './components/landingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Profilepage from "./components/Profilepage/Profilepage";
import HomePage from './components/homePage/homePage';
// import ProjectUpload from './components/projectUpload/projectUpload';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Completed from "./components/Profilepage/Completed ";
import Ongoing from "./components/Profilepage/Ongoing";
import Remaining from "./components/Profilepage/Remaining";
function App() {
  return (
<>
      {/* <Profilepage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landingPage" element={<LandingPage />} />
          {/*<Route path="/projectUpload" element={<ProjectUpload />} />*/}
          <Route path="/ProjectDetails" element={<ProjectDetails title="Plagarism Detection"/>} />
          <Route path="/ProfilePage" element={<div><Profilepage/><Completed/></div>} />
          <Route path='/ProfilePage/Completed' element={<div><Profilepage/><Completed/></div>}></Route>
       <Route path="/ProfilePage/Ongoing" element={<div><Profilepage/><Ongoing/></div>}></Route>
       <Route path="/ProfilePage/Remaining" element={<div><Profilepage/><Remaining/></div>}></Route>
        </Routes>
      </Router>
</>

    
  );
}

export default App;
