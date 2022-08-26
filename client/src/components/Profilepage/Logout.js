import React from 'react'
import "./Logout.css"


function Logout(props) {


  return (
    <>

      <nav className="nav">
        <button className="logout_button" onClick={props.onLogout}>LogOut</button>
      </nav>


    </>
  )
}

export default Logout