import React from "react";
import "../assets/css/foodiez.css";
import recipes from "../assets/data";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const displayRecipes = recipes.map((recipe) => {
    return;
    <RecipeCard recipeImage={recipe.image} recipeName={recipe.name} />;
  });
  return <div className="recipes-section">{displayRecipes}</div>;
};

export default RecipeList;
