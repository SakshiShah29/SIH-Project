import React, { useState } from 'react'
import UploadProjectModal from '../Modals/UploadProjectModal';

// import { Route, Router, Routes } from "react-router-dom"
import BottomHeader from "./BottomHeader"
import MainHeader from './MainHeader'
// import Completed from './Completed '
// import Ongoing from './Ongoing'
// import Remaining from './Remaining'
const Profilepage = () => {
 
    const [upload, setUpload] = useState(false);
    const showUploadPage = () => {
        setUpload(true)
    };

    const dontShowUpload = () => {
        setUpload(false);
    }
  return (
    <div>
    {upload && <UploadProjectModal onClick={dontShowUpload} />}
      <MainHeader onClick={showUploadPage}/>
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