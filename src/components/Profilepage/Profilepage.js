import React from 'react'

import { Route } from "react-router-dom"
import BottomHeader from "./BottomHeader"
import MainHeader from './MainHeader'
import Completed from './Completed '
import Ongoing from './Ongoing'
import Remaining from './Remaining'
const Profilepage = () => {
  return (
    <div>
      <MainHeader />
      <BottomHeader />
      <main>
        <Route path="/Completed" element={<Completed />} />
        <Route path="/Ongoing" element={<Ongoing />} />
        <Route path="/Remaining" element={<Remaining />} />
      </main>
    </div>
  )
}

export default Profilepage