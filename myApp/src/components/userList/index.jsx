import { useEffect, useState } from "react";
import Loader from "../loaders";
import styles from "./userList.module.css";

const UserList = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
    }, 2000);
  }, []);

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <div className={styles.userListContainer}>
      <h2 className={styles.userListHeading}>Users</h2>
      <div className={styles.userList}>
        <Loader />
      </div>
    </div>
  );
};

export default UserList;
