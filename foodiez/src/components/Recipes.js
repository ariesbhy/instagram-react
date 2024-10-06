import React, { useState, useEffect } from "react";
import "../assets/data";

const Recipes = () => {
  const [recipes, setRecipes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("/api/recipes");
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        setError("Error fetching recipes");
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h2> Recipes </h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3> {recipe.name}</h3>
            <p> {recipe.description}</p>
            <p> Category: {recipe.category}</p>
            <p> Ingredients: {recipe.ingredients.join(",")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
