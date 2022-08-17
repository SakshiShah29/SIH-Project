import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// import { Route, Router, Routes } from "react-router-dom"
import BottomHeader from "./BottomHeader"
import MainHeader from './MainHeader'
// import Completed from './Completed '
// import Ongoing from './Ongoing'
// import Remaining from './Remaining'
const Profilepage = () => {
 const navigate=useNavigate();
    const handleUploadProject=()=>{
      navigate("/UpladProject")
    }
    const handleMessage=()=>{
      navigate("/Chat")
    }
  return (
    <div>
    
      <MainHeader onClick={handleUploadProject} onMessage={handleMessage}/>
      <BottomHeader />
    
    </div>
  )
}

export default Profilepage

// <main>
// <Router>
// <Routes>
// <Route path='/Completed' element={<Completed/>}></Route>
// <Route path="/Ongoing" element={<Ongoing/>}></Route>
// <Route path="/Remaining" element={<Remaining/>}></Route>
// </Routes>
// </Router>
// </main>