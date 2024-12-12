import React from "react";
import styles from "../Styles/SinglePostPage.module.css";
import Comment from "./comment";
const Comments = () => {
  return (
    <div className={styles.commentscontainer}>
      <h1>Comments</h1>
      <div className={styles.commentsinput}>
        <input type="text" placeholder="Enter your comment..." className={styles.input} />
        <button>Submit</button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
