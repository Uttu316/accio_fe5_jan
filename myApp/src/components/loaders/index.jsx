import React from "react";
import styles from "./loader.module.css";
const CardLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderImg}></div>
      <div className={styles.loadername}></div>
    </div>
  );
};

const Loader = ({ size = 4 }) => {
  const arr = new Array(size).fill(0);

  return (
    <React.Fragment>
      {arr.map((item, index) => (
        <CardLoader key={index} />
      ))}
    </React.Fragment>
  );
};

export default Loader;
