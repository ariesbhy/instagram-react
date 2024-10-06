import React from "react";
import cook from "../assets/media/cooks-logo.jpg";

const Header = ({ cooksName }) => {
  return (
    <>
      <img src={cook} alt="cook-logo" className="food-image" />
      <h1> {cooksName} </h1>
    </>
  );
};

export default Header;
