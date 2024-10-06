import React from "react";
import Header from "./Header";
import CategoryList from "./CategoryList";
import "../assets/css/foodiez.css";

const Home = () => {
  return (
    <div className="container">
      <Header cookName={"B Cook"} />
      <CategoryList />
    </div>
  );
};

export default Home;
