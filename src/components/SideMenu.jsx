import React from "react";
import Search from "../components/Search";
import styles from "../Styles/PostList.module.css";
const SideMenu = () => {
  return (
    <div className={styles.smcontainer}>
      <h1 className={styles.heading}>Search</h1>
      <Search />
      <h1 style={{ marginTop: "20px" }} className={styles.heading}>
        Filter
      </h1>
      <div className={styles.filters}>
        <label htmlFor="" className={styles.label}>
          <input
            type="radio"
            name="sort"
            value="newest"
            className={styles.input}
          />
          Newest
        </label>
        <label htmlFor="" className={styles.label}>
          <input
            type="radio"
            name="sort"
            value="popular"
            className={styles.input}
          />
          Most Popular
        </label>
        <label htmlFor="" className={styles.label}>
          <input
            type="radio"
            name="sort"
            value="trending"
            className={styles.input}
          />
          Trending
        </label>
        <label htmlFor="" className={styles.label}>
          <input
            type="radio"
            name="sort"
            value="oldest"
            className={styles.input}
          />
          Oldest
        </label>
      </div>
      <h1 className={styles.heading}>Categories</h1>
      <div className={styles.category}>
        <span>All</span>
        <span>Web Design</span>
        <span>Development</span>
        <span>Databases</span>
        <span>Search Engines</span>
        <span>Marketing</span>
      </div>
    </div>
  );
};

export default SideMenu;
