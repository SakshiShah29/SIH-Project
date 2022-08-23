import React, { useContext } from 'react'
import { AccountContext } from './accountContext';
import { Link } from "react-router-dom";
import classes from "./Signup.module.css"
import { Marginer } from './marginer';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Signup(props) {
  const top100Films = [
    { label: 'Acharya Nagarjuna University, Guntur'},
    { label: 'Acharya NG Ranga Agricultural University, Hyderabad'},
    { label: 'Andhra University, Visakhapatnam'},
    { label: 'Kavi Kulguru Kalidas Sanskrit Vishwavidyalaya, Ramtek'},
    { label: 'Vidya Sagar University, Midnapore'},
    { label: 'Uttrakhand Technical University, Dehradun'},
    { label: 'Telangana University, Nizamabad '},
    { label: 'SYMBIOSIS International University, Pune'},
    { label: 'Solapur University, Solapu'},
    { label: 'Sikkim Manipal University, Gangtok'},
    { label: 'Saurashtra University, Rajkot'},
    { label: 'Nirma University, Ahemedabad'},
    { label: 'Charusat University, Changa'},
    { label: 'Chandigarh University,Chandigarh'},];

  return (
    <div className={classes.boxcontainer}>

      
    
      <form className={classes.formcontainer}>
        <input className={classes.inputcontainer} type="text" placeholder="Name" />
        <input className={classes.inputcontainer} type="email" placeholder="Email" />
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="University" />}
      />
        <input className={classes.inputcontainer} type="password" placeholder="Password" />
        <input className={classes.inputcontainer} type="text" placeholder="Domain Interest" />
        <input className={classes.inputcontainer} type="number" placeholder="Phone Number" />
      </form>
      <Marginer direction="vertical" margin="1em" />
      <button className={classes.submitbutton1} type="submit">Sign Up</button>
      
      <Marginer direction="vertical" margin="2em" />
    </div>
  )
}

export default Signup