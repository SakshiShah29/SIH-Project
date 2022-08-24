import React from 'react'
import classes from "./CommentSection.module.css";
import { useState } from 'react';
import { TextField } from '@mui/material';
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
    <TextField id="standard-basic" label="Standard" variant="standard" sx={{width:"70%",Color:"#fff"}} onChange={(e)=>setText(e.target.value)}/>
    <button className={classes.commentFormButton} disabled={isTextAreaDisabled}>{submitlabel}</button>
   
    </form>
  )
}
// <input type={"text"} className={classes.commentFormTeaxtArea} value={text} onChange={(e)=>setText(e.target.value)}/>
