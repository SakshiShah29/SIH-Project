import React, { useEffect, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
  deleteComment,
} from "./api";
import { CommentForm } from "./CommentForm";
import Comment from "./Comment";
import classes from "./CommentSection.module.css";


const CommentSection = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  const addComment = (text, parentId) => {
    console.log("addComment", text, parentId);
    createCommentApi(text,parentId).then(comment=>{
        setBackendComments([comment,...backendComments])
    })
  };
  const deleteComment=(commentId)=>{
    if(window.confirm("Are you sure you want to remove the comment?")){
      deleteCommentApi(commentId).then(()=>{
      const updatedBackendComments=backendComments.filter(
        (backendComment)=>backendComment.id !==commentId
      );
      setBackendComments(updatedBackendComments);
      });
    }
  }

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className={classes.comments}>
     <div className={classes.upper}>
     <h3 className={classes.commentsTitle}>Comments</h3>
 
     
     </div>
      <div className={classes.commentsContainer}>
        {rootComments.map((rootComment) => (
          // <div key={rootComment.id}>{rootComment.body}</div>
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
          />
        ))}
      </div>
     <div className={classes.form}> <CommentForm submitlabel="Write" handleSubmit={addComment} /></div>
    </div>
  );
};

export default CommentSection;
