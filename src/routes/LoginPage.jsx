import { SignIn } from "@clerk/clerk-react";
import React from "react";
import styles from "../Styles/AuthStyles.module.css";

const LoginPage = () => {
  return (
    <div className={styles.authcontainer}>
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
