import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = ValidateForm();
    if (!isValid) return;

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await resizeBy.json();
      if (data.success) {
        history.push("/");
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Error signing in");
    }
  };
  const validateForm = () => {
    if (!email || !password) {
      setError("All fields are required");
      return false;
    }
    return true;
  };

  return (
    <form>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <div style={{ color: red }}> {error}</div>}
      <button type="submit"> Sign In </button>
    </form>
  );
};

export default SingIn;
