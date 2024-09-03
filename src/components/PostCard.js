import React from "react";
import "../assets/css/instagram.css";
import cards from "../assets/data/cards";

const PostCard = ({ cards }) => {
  return (
    <div className="cards-container">
      <img src={cards.image} alt="natural" />
      <h3>{cards.title}</h3>
      <p>{cards.dis}</p>
    </div>
  );
};

export default PostCard;
