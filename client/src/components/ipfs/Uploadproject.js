import React, { useContext, useEffect, useState } from "react";
import connectWallet from "./connectwallet";
import Context from "./context";
import ImagesUpload from "../imagesupload/DragAndDrop";
import Ipfs from "./Ipfs";
import Navbar from "../Navbar/Navbar";
import "./uploadproject.css";
// import MultipleSelectChip from "../Profilepage/MultipleSelectChip";
export default function Uploadproject() {
  let obj = useContext(Context);
  const [files, setFiles] = useState([]);
  const [title, settitle] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [abstract, setabstract] = useState("");
  const [techstack, settechstack] = useState([]);
  const [url, seturl] = useState("");
  const [completed, setcompleted] = useState(true);
  const [privatekey, setprivatekey] = useState("");
  const [projectcompletion, setprojectcompletion] = useState(true);
  const [tech_stack, settech_stack] = useState([]);
  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleStatusChange = () => {
    if (document.querySelector("#OnGoing").checked) {
      document.querySelector(".upload-to-ipfs").classList.add("d-none");
      setprojectcompletion(true);
    } else if (document.querySelector("#Completed").checked) {
      document.querySelector(".upload-to-ipfs").classList.remove("d-none");
      setprojectcompletion(false);
    }
    console.log(projectcompletion)
  };

  let tech_array = [];
  const handleSelectStack = (e) => {
    // let tech_element = `<div className='tech-stacks'>${e.target.innerText} <span className="badge">✕</span></div>`

    // tech_array.push(e.target.innerText);
    settech_stack(prev => {
      return [...prev, e.target.innerText];
    })
    console.log(tech_array)
    // tech_array.map(ele => document.querySelector('.stack_details').appendChild(ele))
  }
  let collaborators_array = []
  const addCollaboratorsArray = () => {
    let collaborators_input = document.querySelector('#project-upload-field').value;
    collaborators_array.push(collaborators_input)
    console.log(collaborators_array)
  }

  async function projectsubmitted() {
    console.log(title);
    console.log(abstract);
    console.log(collaborators);
    console.log(techstack);
    console.log(files);
    console.log(url);
    console.log(projectcompletion);
    let data = await JSON.stringify({
      title,
      abstract,
      collaborators,
      files,
      url,
    });

    console.log(data);
    console.log("Now we are sending the data to the backend");

    let result = await fetch(
      "http://localhost:3001/api/student/projectupload",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          abstract,
          collaborators,
          files,
          url,
          completed,
          privatekey,
          obj,
        }),
      }
    );
    let finaldata = await result.json();
    console.log(finaldata);
  }

  return (
    <div>
      <Navbar />
      <div className="project-upload d-flex flex-column justify-content-center align-items-center">
        <h1>Upload Project</h1>

        <div className="input-fields-project-upload">

          <div className="mb-3">
            <label className="label-project-upload">
              Project Title <span className="cumpulsory">*</span>
            </label>
            <input
              type="text"
              className="input-project-upload"
              placeholder="Title of your project"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>


          <div className="mb-3">
            <label className="label-project-upload">
              Abstract <span className="cumpulsory">*</span>
            </label>
            <input
              type="text"
              className="input-project-upload"
              placeholder="Abstract of your project"
              value={abstract}
              onChange={(e) => {
                setabstract(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label className="label-project-upload">Abstract <span className='cumpulsory'>*</span></label>
            <input type="text" className="input-project-upload" placeholder="Abstract of your project" />
          </div>


          <div className="mb-3">
            <label className="label-project-upload">Technology Stack <span className='cumpulsory'>*</span></label>
            <div className="stack-details d-flex mb-1" id="tech-stack-details">
              {tech_stack.map(ele => {
                return <div className='tech-stacks'>{ele} <span className="badge">✕</span></div>
              })}
            </div>

          </div>
          <div className="dropdown mb-3">
            <button className="input-project-upload text-left" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ textAlign: "left" }}>
              Technology Stack
            </button>
            <ul className="dropdown-menu">
              <li onClick={handleSelectStack} className="dropdown-item">Mobile Application Development</li>
              <li onClick={handleSelectStack} className="dropdown-item">Web Development</li>
              <li onClick={handleSelectStack} className="dropdown-item">Cyber Security</li>
              <li onClick={handleSelectStack} className="dropdown-item">Machine Learning</li>
              <li onClick={handleSelectStack} className="dropdown-item">Artificial Intelligence</li>
              <li onClick={handleSelectStack} className="dropdown-item">Data Science</li>
              <li onClick={handleSelectStack} className="dropdown-item">Devops</li>
              <li onClick={handleSelectStack} className="dropdown-item">Cloud Computing</li>
              <li onClick={handleSelectStack} className="dropdown-item">Blockchain</li>
              <li onClick={handleSelectStack} className="dropdown-item">IOT</li>
            </ul>
          </div>

          <div className="mb-3">
            <label className="label-project-upload">Upload Photos</label>

            {/* <div className="image-content">
              <div className="image-stack d-inline-block mr-1">
                <img src={imgSection} className='img-content-uploaded' alt="" />
                <div className="cover"> <img src={cross} alt="" /> </div>
              </div>
              <div className="image-stack d-inline-block mr-1">
                <img src={imgSection} className='img-content-uploaded' alt="" />
                <div className="cover"> <img src={cross} alt="" /> </div>
              </div>
              <div className="image-stack d-inline-block mr-1">
                <img src={imgSection} className='img-content-uploaded' alt="" />
              </div>
              <div className="image-stack d-inline-block mr-1">
                <img src={imgSection} className='img-content-uploaded' alt="" />
                <div className="cover"> <img src={cross} alt="" /> </div>
              </div>
            </div> */}
          </div>
          <div className="mb-3">
            <label className="label-project-upload">Other Creators</label>
            <div className="input-group mb-3">
              <input type="email" className="input-group input-project-upload" placeholder="Email ID of other creators" id="project-upload-field" style={{ width: "46.5rem" }} />
              <span className="input-group-text" id="basic-addon2" onClick={addCollaboratorsArray}>Add</span>
            </div>

          </div>


          <div className="mb-3">
            <label className="label-project-upload">
              Project Status <span className="cumpulsory">*</span>
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="Completed"
                name="status"
                value={projectcompletion}
                onChange={handleStatusChange}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Completed
              </label>
            </div>
            <div className="form-check form-check-inline ml-2">
              <input
                className="form-check-input"
                type="radio"
                id="OnGoing"
                name="status"
                value={projectcompletion}
                onChange={handleStatusChange}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                OnGoing
              </label>
            </div>
          </div>
          <div className="upload-to-ipfs">
            <label className="label-project-upload">Upload Project <span className="cumpulsory">*</span> </label>
            <Ipfs url={seturl} />
          </div>



          <connectWallet />


          <div className="mb-5">
            <label className="label-project-upload">
              Private Key <span className="cumpulsory">*</span>
            </label>
            <input
              type="password"
              className="input-project-upload"
              placeholder="Private key of the student account"
              value={privatekey}
              onChange={(e) => {
                setprivatekey(e.target.value);
              }}
            />
          </div>





          <div className="d-flex justify-content-center mb-5">
            <button className="verification-button" onClick={projectsubmitted}>
              Send for Verification
            </button>
          </div>


        </div>
      </div>
    </div >
  );
}

{
  /* <p>{obj.current.admin}</p>
        <p>{obj.current.profileid}</p>
        <p>{obj.current.college}</p>
        <p>{obj.current.useraddress}</p> */
}
{
  /* <button onClick={projectsubmitted}>Submit the details</button> */
}

// <input
//               type="text"
//               className="input-project-upload"
//               placeholder="Technology Stack of your project"
//               value={techstack}
//               onChange={(e) => {
//                 settechstack(e.target.value);
//               }}
//             />
