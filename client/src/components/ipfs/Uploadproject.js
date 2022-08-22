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
  const [abstract, setabstract] = useState("");
  const [collaborators, setcollaborators] = useState();
  const [techstack, settechstack] = useState([]);
  const [url, seturl] = useState("");
  const [completed, setcompleted] = useState(true);
  const [privatekey, setprivatekey] = useState("");
  const [projectcompletion, setprojectcompletion] = useState(true);
  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleStatusChange = () => {
    if (document.querySelector("#OnGoing").checked) {
      document.querySelector(".upload-project-area").classList.add("d-none");
      setprojectcompletion(true);
    } else if (document.querySelector("#Completed").checked) {
      document.querySelector(".upload-project-area").classList.remove("d-none");
      setprojectcompletion(false);
    }
  };

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
        <h1>This is the project upload section</h1>
        <br />
        <br />
        <br />
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
            <label className="label-project-upload">
              Technology Stack <span className="cumpulsory">*</span>
            </label>
            <div className="stack-details d-flex mb-1"></div>
            {/* <MultipleSelectChip value={techstack} onChange={(e)=>{settechstack(e.target.value)}}/> */}
          </div>
          <div className="mb-5">
            <label className="label-project-upload">Other Creators</label>
            <input
              type="text"
              className="input-project-upload"
              placeholder="Email ID of other creators"
            />
          </div>
          <div className="mb-5">
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
              <label className="form-check-label" for="inlineCheckbox2">
                Completed
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="OnGoing"
                name="status"
                value={projectcompletion}
                onChange={handleStatusChange}
              />
              <label className="form-check-label" for="inlineCheckbox1">
                OnGoing
              </label>
            </div>
          </div>
          <connectWallet />
          <div className="mb-3">
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
          <Ipfs url={seturl} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ImagesUpload fnc={setFiles} />
          <div className="d-flex justify-content-center mb-5">
            <button className="verification-button" onClick={projectsubmitted}>
              Send for Verification
            </button>
          </div>
        </div>
      </div>
    </div>
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
