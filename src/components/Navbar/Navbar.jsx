import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "../Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbarContainer}>
      {/* Logo */}
      <Link to="/" className={styles.logocontainer}>
        <Image src={"logo.png"} w={30} h={30} alt={"Logo"} />
        <span>Khizilog</span>
      </Link>
      {/* MOBILE MENU */}
      <div className={styles.mobilemenu}>
        {/* icon container */}

        {/* Hamburger Menu */}
        <div
          className={styles.iconContainer}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div
            className={`${styles.bar} ${styles.originLeft} ${
              open ? styles.rotate45 : ""
            }`}
          ></div>
          <div
            className={`${styles.bar} ${open ? styles.opacityZero : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${styles.originLeft} ${
              open ? styles.inverseRotate : ""
            }`}
          ></div>
        </div>
        {/* mobile menu */}
        <div
          className={`${styles.mobileLinkList} ${open ? styles.active : ""}`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={styles.menuitem}
          >
            Home
          </Link>
          <Link
            to="/posts"
            onClick={() => setOpen(false)}
            className={styles.menuitem}
          >
            Trending
          </Link>
          <Link
            to="/posts"
            onClick={() => setOpen(false)}
            className={styles.menuitem}
          >
            Most Popular
          </Link>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={styles.menuitem}
          >
            About
          </Link>
          <SignedOut>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className={styles.menuitem}
            >
              <button className={styles.loginbtn}>Login 👋</button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* desktop menu */}
      <div className={styles.desktopmenu}>
        <Link to="/" onClick={() => setOpen(false)} className={styles.menuitem}>
          Home
        </Link>
        <Link
          to="/posts"
          onClick={() => setOpen(false)}
          className={styles.menuitem}
        >
          Trending
        </Link>
        <Link
          to="/posts"
          onClick={() => setOpen(false)}
          className={styles.menuitem}
        >
          Most Popular
        </Link>
        <Link to="/" onClick={() => setOpen(false)} className={styles.menuitem}>
          About
        </Link>
        <SignedOut>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className={styles.menuitem}
          >
            <button className={styles.loginbtn}>Login 👋</button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
