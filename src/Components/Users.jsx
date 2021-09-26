import React from "react";
import UserData from "./UserData";

const Users = ({ user }) => {
  return (
    <div className="users">
      <UserData user={user} />
    </div>
  );
};

export default Users;
