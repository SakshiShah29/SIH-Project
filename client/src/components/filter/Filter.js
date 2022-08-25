import React, { useState } from 'react'
import './Filter.css'
const Filter = () => {

  const [domain, setdomain] = useState([])
  const [tech_stack_filter, settech_stack_filter] = useState([])

  const handleSelectforFilter = (e) => {
    if (domain.includes(e.target.value)) {
      let index = domain.indexOf(e.target.value);
      if (index !== -1) {
        domain.splice(index, 1);
      }
    }
    setdomain(prev => {
      return [...prev, e.target.value];
    })

  }

  return (
    <>
      <div className="filter-main">
        <h1 className='mb-3'>
          Project Status
        </h1>
        <div className="filter-radio">
          <div className="form-check">
            <input type="radio" name="onGoing" id="onGoing" className='form-check-input' />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              OnGoing
            </label>
          </div><div className="form-check">
            <input type="radio" name="Completed" id="Completed" className='form-check-input' />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Completed
            </label>
          </div><div className="form-check">
            <input type="radio" name="All" id="All" className='form-check-input' />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              All
            </label>
          </div>
        </div>
        <p><ins>Domain Area</ins></p>
        <div className="filter-domain">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Mobile Application Development" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Mobile Application Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Web Development" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Cyber Security" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Cyber Security</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Machine Learning" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Machine Learning</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Artificial Intelligence" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Artificial Intelligence</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Data Science" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Data Science</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Devops" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Devops</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Cloud Computing" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Cloud Computing</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Blockchain" onClick={handleSelectforFilter} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Blockchain</label>
          </div>
        </div>
        <p><ins>Domain Area</ins></p>
        <div className="filter-domain">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
        </div>
        <p><ins>Domain Area</ins></p>
        <div className="filter-domain">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Web Development</label>
          </div>
        </div>
        <div className="filter-buttons mt-4 d-flex justify-content-center">
          <button className="btn-outline-filter">Clear</button>
          <button className="btn-filter">Apply</button>
        </div>

      </div>
    </>
  )
}

export default Filter