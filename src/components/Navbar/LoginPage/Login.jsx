import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

// ⚠️ REPLACE WITH YOUR DEPLOYED BACKEND URL ⚠️
const API_BASE_URL = "https://my-auth-backend-gpp5.onrender.com"; // Or your deployed URL like https://my-backend-app.herokuapp.com

function Login({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const validateField = (name, value) => {
    let error = "";
    const trimmed = value.trim();

    if (name === "name" && isSignUp) {
      if (!trimmed) error = "*Name is required";
      else if (!/^[A-Za-z\s]*$/.test(trimmed)) error = "*Only letters allowed";
    }

    if (name === "number" && isSignUp) {
      if (!/^\d*$/.test(value)) {
        error = "*Only numbers allowed";
      } else if (value.length !== 10 && value.length > 0) {
        error = "*Must be 10 digits";
      }
    }

    if (name === "email") {
      if (!trimmed) error = "*Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
        error = "*Invalid email format";
    }

    if (name === "password") {
      if (!trimmed) error = "*Password is required";
      else if (trimmed.length < 6) error = "*Min 6 characters";
    }

    if (name === "gender" && isSignUp && !trimmed) error = "*Select gender";
    if (name === "dateOfBirth" && isSignUp && !trimmed) error = "*Select DOB";

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError("");
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldsToCheck = isSignUp
      ? ["name", "email", "password", "number", "gender", "dateOfBirth"]
      : ["email", "password"];

    fieldsToCheck.forEach((field) => validateField(field, formData[field]));

    const hasErrors = Object.values(errors).some(Boolean);
    const hasEmpty = fieldsToCheck.some((field) => !formData[field].trim());

    if (hasErrors || hasEmpty) {
      setFormError("*Please fill all fields correctly.");
      return;
    }

    try {
      if (isSignUp) {
        const res = await axios.post(`${API_BASE_URL}/signup`, formData);
        console.log("✅ New user signed up:", res.data.email);
        onLoginSuccess(res.data);
      } else {
        const res = await axios.post(`${API_BASE_URL}/signin`, {
          email: formData.email,
          password: formData.password,
        });
        console.log("✅ Logged in:", res.data.email);
        onLoginSuccess(res.data);
      }
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setFormError(err.response.data.message || "*Something went wrong.");
      } else if (err.request) {
        // The request was made but no response was received
        setFormError("*No response from server. Check your connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setFormError("*Error: Could not send request.");
      }
      console.error("Login/Signup error:", err);
    }
  };

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
    setFormData({
      name: "",
      email: "",
      password: "",
      number: "",
      gender: "",
      dateOfBirth: "",
    });
    setErrors({});
    setFormError("");
  };

  const isFormValid = () => {
    const required = isSignUp
      ? ["name", "email", "password", "number", "gender", "dateOfBirth"]
      : ["email", "password"];
    const hasErrors = Object.values(errors).some(Boolean);
    const hasEmpty = required.some((field) => !formData[field].trim());
    return !hasErrors && !hasEmpty;
  };

  return (
    <div className="login-page">
      <div className="Login-black-card login-card-container">
        <h2 className="login-heading">{isSignUp ? "🚀✍️ Sign Up" : "🚪🏃 Sign In"}</h2>
        <div className="login-divider-line"></div>

        <div className="red-card form-container">
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <label>Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}

                <label>Phone Number</label>
                <input
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  maxLength={10}
                  required
                />
                {errors.number && <span className="error-message">{errors.number}</span>}
              </>
            )}

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={handleFocus}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}

            {isSignUp && (
              <>
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                >
                  <option value="">Select...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span className="error-message">{errors.gender}</span>}

                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                />
                {errors.dateOfBirth && (
                  <span className="error-message">{errors.dateOfBirth}</span>
                )}
              </>
            )}

            {formError && <p className="form-error-message">{formError}</p>}

            <button type="submit" disabled={!isFormValid()}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <p className="switch-mode-text">
            {isSignUp ? "Already registered?" : "New here?"}{" "}
            <span className="switch-mode-link" onClick={handleSwitchMode}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;