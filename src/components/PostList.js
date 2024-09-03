import React from "react";
import "../assets/css/instagram.css";
import cards from "../assets/data/cards";
import Postcard from "./Postcard";

const PostList = () => {
  const displayCards = cards.map((cardsObject) => {
    return <Postcard cards={cardsObject} />;
  });
  return <div className="cards-section">{displayCards}</div>;
};

export default PostList;
