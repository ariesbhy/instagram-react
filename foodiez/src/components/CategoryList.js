import React from "react";
import "../assets/css/foodiez.css";
import categories from "../assets/data/categories";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const displayCategories = categories.map((category) => {
    return (
      <CategoryCard
        categoryImage={category.image}
        categoryTitle={category.title}
      />
    );
  });
  return <div className="categories-section">{displayCategories}</div>;
};

export default CategoryList;
