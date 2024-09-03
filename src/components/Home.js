import React from "react";
import Header from "./Header";
import PostList from "./PostList";
import "../assets/css/instagram.css";

const Home = () => {
  return (
    <div className="container">
      <Header instaName={"Basmah's instagram"} />
      <PostList />
    </div>
  );
};
