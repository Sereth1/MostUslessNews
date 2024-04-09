import React from "react";

import UserProfile from "./UserProfile";
import NavBar from "../SignUpReg/NavBar";

function UserHomePage({ user, userId }) {
  return (
    <div>
      <>
        <NavBar user={user} />
        <UserProfile user={user} userId={userId} />
      </>
    </div>
  );
}

export default UserHomePage;
