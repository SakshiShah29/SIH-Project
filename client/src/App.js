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
import ProjectUpload from './components/projectUpload/projectUpload';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
function App() {
  return (
    <>
      {/* <Profilepage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/projectUpload" element={<ProjectUpload />} />
          <Route path="/ProjectDetails" element={<ProjectDetails />} />
          <Route path="/ProfilePage" element={<Profilepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
