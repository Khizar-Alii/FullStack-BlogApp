import React from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import styles from "../Styles/writepage.module.css";
const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>You should login!</div>;
  }
  return (
    <div className={styles.writecontainer}>
      <h1 className={styles.heading}>Create a New Post</h1>
      <form action="#">
        <button className={styles.writebtn}>Add a cover image</button>
        <input
          className={styles.input}
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className={styles.categorycontainer}>
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className={styles.textarea}
          name="desc"
          placeholder="A Short Description"
        />
        <ReactQuill theme="snow" className={styles.reactquill}  />
        <button className={styles.submitbtn}>Send</button>
      </form>
    </div>
  );
};

export default WritePage;
