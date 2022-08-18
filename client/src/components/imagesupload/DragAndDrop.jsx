import React, { useEffect, useState } from "react";
import DragAndDropCSS from "./DragAndDrop.css";
import setFiles from "../ipfs/Uploadproject";
const DragAndDrop = (props) => {
  const setfiles = props.fnc;
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setfiles((oldfiles) => {
      return [...oldfiles, files];
    });
  };

  return (
    <>
      <div className="container">
        <div
          className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        >
          <div className="drop-message">
            <div className="upload-icon"></div>
            Drag & Drop Images of your project
          </div>
        </div>
      </div>
    </>
  );
};
export default DragAndDrop;
