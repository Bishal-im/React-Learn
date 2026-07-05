import React from "react";
import styles from "./Header.module.css";

const Hearder = () => {
  return (
    <div className={styles.header}>
      <h1>Header</h1>
      <button className={styles.btn}>Login</button>
    </div>
  );
};

export default Hearder;
