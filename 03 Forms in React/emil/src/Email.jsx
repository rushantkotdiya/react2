import { useState } from "react";

export default function EmailValidationForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear errors if valid
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2 >Email Validation Form</h2>
      <form onSubmit={handleSubmit}>
        <label >
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        </label>
        {error && <p>{error}</p>}
        <button
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
