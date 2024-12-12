import React from "react";
import styles from "../Styles/SinglePostPage.module.css";
import Image from "./Image";
const Comment = () => {
  return (
    <div className={styles.commentcontainer}>
      <div className={styles.topinfo}>
        <Image src={"userImg.jpeg"} classname={styles.commentimg} />
        <h3>Khizar Ali</h3>
        <span>2 days ago</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident laboriosam harum architecto enim? Fugiat nisi beatae veniam dolores animi harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nulla!
      </p>
    </div>
  );
};

export default Comment;
