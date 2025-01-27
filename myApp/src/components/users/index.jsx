import React from "react";
import UserCard from "../userCard";

const Users = ({ users }) => {
  return (
    <React.Fragment>
      {users.map((item) => (
        <UserCard
          key={item.id}
          id={item.id}
          userName={item.userName}
          photo={item.photo}
        />
      ))}
    </React.Fragment>
  );
};

export default Users;
