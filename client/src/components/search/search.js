import React from "react";
import "./search.css";
import filter from "../../images/filter.png";
const search = () => {
  return (
    <div className="search-filter mb-5">
      <input
        id="search"
        type="text"
        placeholder="Search Your Project by typing the title Here"
      />
      <button className="button-filter">
        <img src={filter} alt="" />
      </button>
    </div>
  );
};

export default search;
