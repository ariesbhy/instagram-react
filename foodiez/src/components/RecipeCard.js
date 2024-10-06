import React from "react";
import "../assets/data";

const RecipeCard = ({ recipeImage, recipeName }) => {
  return (
    <div className="categories-container">
      <img src={recipeImage} alt="recipe" />
      <h2> {recipeName}</h2>
    </div>
  );
};

export default RecipeCard;
