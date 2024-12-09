import React from "react";
import styles from "../Styles/HomePage.module.css";
import { Link, Links } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostLists from "../components/PostLists";

const HomePage = () => {
  return (
    <div className={styles.homecontainer}>
      {/* BreadCrumb */}
      <div className={styles.hometop}>
        <Link to={"/"}>Home</Link>
        <span style={{ color: "#000" }}>&#x2022;</span>
        <span>Blog and Articles</span>
      </div>
      {/* Introduction */}
      <div className={styles.intro}>
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            molestias autem dignissimos sint modi officia.
          </p>
        </div>
        <Link to="write" className={styles.introbtn}>
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className={styles.svg}
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className={styles.introbtnbtm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* categories */}
      <MainCategories />

      {/* FeaturedPosts */}
      <FeaturedPosts />

      {/* Posts Lists */}
      <div style={{margin : '5px 0'}}>
          <h1 style={{fontWeight:"600",color : 'grey'}}>Recent Posts</h1>
          <PostLists />
      </div>

    </div>
  );
};

export default HomePage;
