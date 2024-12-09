import React from "react";
import styles from "../Styles/PostLists.module.css";
import Image from "./Image";
import { Link } from "react-router-dom";

const PostListsItem = () => {
  return (
    <div className={styles.postlistitemcontainer}>
      {/* Image */}
      <div className={styles.postlistimgcontainer}>
        <Image src={"postImg.jpeg"} classname={styles.postlistitemimg} w={'468'} />
      </div>
      <div className={styles.listdetails}>
        <Link to={"/test"} className={styles.title}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Link>
        <div className={styles.itemdetails}>
          <span>Written By</span>
          <Link className={styles.itemlink}>Khizar ALi</Link>
          <span>on</span>
          <Link className={styles.itemlink}>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          libero harum nobis voluptatum eius voluptate aliquid laborum ipsam
          ipsa rerum?
        </p>
        <Link className={styles.readmore}>Read More...</Link>
      </div>
    </div>
  );
};

export default PostListsItem;
