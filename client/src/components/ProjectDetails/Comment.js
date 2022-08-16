import React from "react";
import classes from "./CommentSection.module.css";
import avatar from "../../images/avatar.png";
const Comment = ({ comment, replies, currentUserId, deleteComment }) => {
  // const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  // const canDelete =currentUserId === comment.userId && replies.length === 0 && !timePassed;
  // const canReply = Boolean(currentUserId);
  // const canEdit = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();

  return (
    <div className={classes.mainContainer}>
    <div className={classes.comment}>
      <div className={classes.commentImageContainer}>
        <img src={avatar} alt="" />
      </div>
      <div className={classes.commentRightPart}>
        <div className={classes.commentContent}>
          <div className={classes.commentAuthor}>{comment.username}</div>
          <div className={classes.date}>{createdAt}</div>
        </div>
        <div className={classes.commentText}>{comment.body}</div>
        <div className={classes.commentactions}>
          <div className={classes.commentAction}>Reply</div>

          <div className={classes.commentAction}>Edit</div>

          <div
            className={classes.commentAction}
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </div>
        </div>
        {replies.length > 0 && (
          <div className={classes.replies}>
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={[]}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Comment;
