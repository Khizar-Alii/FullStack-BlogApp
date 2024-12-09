import React from "react";
import styles from "../Styles/FeaturedPosts.module.css";
import Image from "./Image";
import { Link } from "react-router-dom";
const FeaturedPosts = () => {
  return (
    <div className={styles.feature}>
      {/* feature Left side */}

      <div className={styles.featureleft}>
        <Image
          src={"featured1.jpeg"}
          styles={{ backgroundSize: "cover", borderRadius: "20px" }}
          classname={styles.img}
        />
        <div className={styles.featureleftcontent}>
          <h1>01.</h1>
          <Link className={styles.featurecategory}>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <Link to={"/test"} className={styles.featuretitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tenetur distinctio.
        </Link>
      </div>

      {/* feature right side */}

      <div className={styles.featureright}>
        {/* Single Item */}
        <div className={styles.featurerightcontainer}>
          <Image
            src={"featured2.jpeg"}
            styles={{ backgroundSize: "cover", borderRadius: "20px" }}
            classname={styles.featurerightimg}
          />
          <div>
            <div className={styles.featurerightcontent}>
              <h1>01.</h1>
              <Link className={styles.featurecategory}>Web Design</Link>
              <span>2 days ago</span>
            </div>
            <Link to={"/test"} className={styles.featuretitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              tenetur distinctio.
            </Link>
          </div>
        </div>
        {/* Single Item end */}

        {/* Single Item begin */}

        <div className={styles.featurerightcontainer}>
          <Image
            src={"featured3.jpeg"}
            styles={{ backgroundSize: "cover", borderRadius: "20px" }}
            classname={styles.featurerightimg}
          />
          <div>
            <div className={styles.featurerightcontent}>
              <h1>01.</h1>
              <Link className={styles.featurecategory}>Web Design</Link>
              <span>2 days ago</span>
            </div>
            <Link to={"/test"} className={styles.featuretitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              tenetur distinctio.
            </Link>
          </div>
        </div>

        {/* Single Item end */}

        {/* Single Item begin */}
        <div className={styles.featurerightcontainer}>
          <Image
            src={"featured4.jpeg"}
            styles={{ backgroundSize: "cover", borderRadius: "20px" }}
            classname={styles.featurerightimg}
          />
          <div>
            <div className={styles.featurerightcontent}>
              <h1>01.</h1>
              <Link className={styles.featurecategory}>Web Design</Link>
              <span>2 days ago</span>
            </div>
            <Link to={"/test"} className={styles.featuretitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              tenetur distinctio.
            </Link>
          </div>
        </div>

        {/* Single Item end */}
      </div>
    </div>
  );
};

export default FeaturedPosts;
