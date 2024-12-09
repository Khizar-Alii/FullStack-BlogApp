import React from "react";
import styles from "../Styles/MainCategories.module.css";
import { Link } from "react-router-dom";
const MainCategories = () => {
  return (
    <div className={styles.maincategoriescontainer}>
      <div className={styles.categoryleft}>
        <Link to="/posts" className={styles.btn}>
          All Posts
        </Link>
        <Link to="/posts?cat=web-design" className={styles.link}>
          Web Design
        </Link>
        <Link to="/posts?cat=development" className={styles.link}>
          Development
        </Link>
        <Link to="/posts?cat=databases" className={styles.link}>
          Databases
        </Link>
        <Link to="/posts?cat=seo" className={styles.link}>
          Search Engines  
        </Link>
        <Link to="/posts?cat=marketing" className={styles.link}>
          Marketing
        </Link>
      </div>
      <span
        style={{
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
          fontWeight: "500",
        }}
      >
        |
      </span>
      <div className={styles.categoryright}>
        <input type="text" placeholder="Search a post..." className={styles.input} />
      </div>
    </div>
  );
};

export default MainCategories;
