import React, { useState } from "react";

const CreateCategory = () => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: category }),
      });
      const data = await res.json();
      if (data.success) {
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Error creating category");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category Name:
        <input
          type={text}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      {error && <div style={{ color: "red" }}> {error} </div>}
      <button type="submit"> Create Category </button>
    </form>
  );
};

export default CreateCategory;
