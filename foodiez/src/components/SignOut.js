import React from "react";
import { useHistory } from "react-router-dom";

const SignOut = () => {
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      const res = await fetch("api/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.succes) {
        history.push("/signin");
      } else {
        console.log("Error signing out");
      }
    } catch (error) {
      console.log("Error signing out");
    }
  };

  return <button onClick={handleSignOut}> Sign Out </button>;
};

export default SignOut;
