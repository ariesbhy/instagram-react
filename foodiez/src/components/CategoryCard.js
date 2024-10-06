import React from "react";
import "../assets/data/categories";

const CategoryCard = ({ categoryImage, categoryTitle }) => {
  return (
    <div className="categories-container">
      <img src={categoryImage} alt="category" />
      <h2> {categoryTitle}</h2>
    </div>
  );
};

export default CategoryCard;
