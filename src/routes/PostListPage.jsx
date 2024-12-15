import React, { useState } from "react";
import PostLists from "../components/PostLists";
import SideMenu from "../components/SideMenu";
import styles from "../Styles/PostList.module.css";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className={styles.topheading}>Development Blog</h1>
      <button onClick={() => setOpen((prev) => !prev)} className={styles.plbtn}>
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className={styles.switchcontainer}>
        <div>
          <PostLists />
        </div>
        <div
          className={`${styles.sidemenu} ${
            open ? styles.opensidebar : styles.closesidebar
          }`}
        >
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
