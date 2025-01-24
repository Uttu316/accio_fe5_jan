import { useCallback, useEffect, useState } from "react";
import Loader from "../loaders";
import styles from "./userList.module.css";
import Users from "../users";
import fetchUsers from "../../services/userServices/fetchUsers";

const UserList = () => {
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const isEmpty = isDone && !users.length;
  const hasUsers = isDone && !!users.length;

  const getUsers = useCallback(async () => {
    try {
      setStatus("loading");
      const users = await fetchUsers();
      setUsers(users);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.userListContainer}>
      <h2 className={styles.userListHeading}>Users</h2>
      <div className={styles.userList}>
        {isLoading && <Loader />}
        {hasUsers && <Users users={users} />}
        {isEmpty && <h2 className={styles.notAvailMsg}>Users Not Available</h2>}
        {isError && <h2 className={styles.errorMsg}>Something Went Wrong</h2>}
      </div>
    </div>
  );
};

export default UserList;
