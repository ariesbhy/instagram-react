import React from "react";
import "../assets/css/instagram.css";
import cards from "../assets/data/cards";
import PostCard from "./PostCard";

const PostList = () => {
  const displayCards = cards.map((cardsObject) => {
    return <PostCard cards={cardsObject} />;
  });
  return <div className="cards-section">{displayCards}</div>;
};

export default PostList;
