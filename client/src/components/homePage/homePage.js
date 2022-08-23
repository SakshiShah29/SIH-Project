import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../search/search";
import "./homePage.css";
import CardStack from "../homeCards/cardStack";
import HomeCards from "../homeCards/homeCards";
import Pagination from "../pagination/pagination";
import "../search/search.css";
import filter from "../../images/filter.png";
import data from "../Data.json";
import search from "../search/search";
let searchword2 = "";
let searchword = "";

//Firstly before entering the home page we need to see whether the user is signed in or not

export default function Homepage() {
  //This is the state that handles the filtered data
  //The initial state is when the projects are only shown for that particular university only
  //For that we first need the university of the student

  const initial = () => {
    let studentuniversity = "Chandubhai S. Patel Institute of Technology";
    return data.filter((value) => {
      return value.university
        .toLowerCase()
        .includes(studentuniversity.toLowerCase());
    });
  };

  const [filtereddata, setfiltereddata] = useState(initial());

  const [filtereddata2, setfiltereddata2] = useState([]);

  function handlefilterdata(event) {
    let filter;
    searchword = event.target.value;
    console.log(searchword);
    if (searchword.length === 0) {
      if (searchword2.length === 0) {
        filter = initial();
      } else {
        filter = data.filter((value, key) => {
          return value.university
            .toLowerCase()
            .includes(searchword2.toLowerCase());
        });
      }
    } else {
      if (searchword2.length !== 0) {
        filter = data.filter((value, key) => {
          let temp1 = value.title
            .toLowerCase()
            .includes(searchword.toLowerCase());
          let temp2 = value.university
            .toLowerCase()
            .includes(searchword2.toLowerCase());
          return temp1 && temp2;
        });
      } else {
        filter = data.filter((value, key) => {
          return value.title.toLowerCase().includes(searchword.toLowerCase());
        });
      }
    }

    console.log("This is the filter data");
    console.log(filter);
    setfiltereddata((prev) => {
      return filter;
    });
  }

  function handlefilterdata2(event) {
    searchword2 = event.target.value;
    let filter;
    if (searchword2.length === 0) {
      if (searchword.length === 0) {
        filter = initial();
      } else {
        filter = data.filter((value, key) => {
          return value.title.toLowerCase().includes(searchword.toLowerCase());
        });
      }
    } else {
      if (searchword.length !== 0) {
        filter = data.filter((value, key) => {
          let temp1 = value.title
            .toLowerCase()
            .includes(searchword.toLowerCase());
          let temp2 = value.university
            .toLowerCase()
            .includes(searchword2.toLowerCase());
          return temp1 && temp2;
        });
      } else {
        filter = data.filter((value, key) => {
          return value.university
            .toLowerCase()
            .includes(searchword2.toLowerCase());
        });
      }
    }

    console.log("This is the filter data");
    console.log(filter);
    setfiltereddata((prev) => {
      return filter;
    });
  }
  return (
    <>
      <div className="homePage">
        <Navbar />
        <div className="search-filter mb-5">
          <input
            id="search"
            type="text"
            placeholder="Search Your Project by typing the title Here"
            onChange={handlefilterdata}
          />
          <input
            id="search"
            type="text"
            placeholder="Search Your Project by typing the university Here"
            onChange={handlefilterdata2}
          />
          <button className="button-filter">
            <img src={filter} alt="" />
          </button>
        </div>
        {console.log(filtereddata, "ThiS is the filtered data1")}
        {filtereddata.length !== 0 &&
          filtereddata.map((ele) => {
            return (
              <HomeCards
                title={ele.title}
                university={ele.university}
                rest={ele}
              />
            );
          })}

        <Pagination />
      </div>
    </>
  );
}
