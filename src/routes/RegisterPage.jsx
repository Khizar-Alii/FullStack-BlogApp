import { SignUp } from "@clerk/clerk-react";
import React from "react";
import styles from "../Styles/AuthStyles.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.authcontainer}>
      <SignUp
        signInUrl="/login"
        appearance={{
          elements: {
            form: styles.clerkcontainer,
            card: styles.card,
            rootBox: styles.root,
            cardBox: styles.cardbox,
          },
        }}
      />
    </div>
  );
};

export default RegisterPage;
