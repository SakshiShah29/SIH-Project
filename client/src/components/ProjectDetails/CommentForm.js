import React from 'react'
import classes from "./CommentSection.module.css";
import { useState } from 'react';
export const CommentForm = ({handleSubmit,submitlabel}) => {
  const [text,setText]=useState("");

  const isTextAreaDisabled=text.length===0;

  const onSubmit=(event)=>{
    event.preventDefault();
    handleSubmit(text);
    setText("")
  }
  return (
    <form onSubmit={onSubmit} className={classes.formContainer}>
    <input type={"text"} className={classes.commentFormTeaxtArea} value={text} onChange={(e)=>setText(e.target.value)}/>
    <button className={classes.commentFormButton} disabled={isTextAreaDisabled}>{submitlabel}</button>
   
    </form>
  )
}
