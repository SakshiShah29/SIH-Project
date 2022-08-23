import React, { useState } from "react";
import classes from "./Signup.module.css";

const SearchBas = ({ placeholder, data }) => {
    const [filteredData,setFilteredData]=useState([])
    const handleFilter=(event)=>{
        const searchWord=event.target.value;
        const newFilter=data.filter((value)=>{
            return value.collegename.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilteredData(newFilter)
    }
  return (
    <div className={classes.search}>
      <div className={classes.upper}>
        <input
          className={classes.inputcontainer}
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className={classes.searchicon}></div>
      </div>

      {filteredData.length==0 &&<div className={classes.dataresult}>
        {filteredData.map((value, key) => {
          return <div className={classes.dataitems}><p>{value.collegename}</p></div>;
        })}
      </div>}
    </div>
  );
};

export default SearchBas;
