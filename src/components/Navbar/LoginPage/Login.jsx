import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";

function Login({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [usersDb, setUsersDb] = useState([]);

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

  // 🔁 Load users from json-server
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      setUsersDb(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

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
      const res = await axios.get("http://localhost:3001/users");
      const users = res.data;
      const userMatch = users.find((u) => u.email === formData.email);

      if (isSignUp) {
        if (userMatch) {
          setFormError("*Email already exists. Please sign in.");
          return;
        }

        const newUser = {
          ...formData,
          id: Math.random().toString(36).substring(2, 6),
          createdAt: new Date().toISOString(),
        };

        await axios.post("http://localhost:3001/users", newUser);
        setUsersDb((prev) => [...prev, newUser]);
        console.log("✅ New user signed up:", newUser.email);
        onLoginSuccess(newUser);
      } else {
        if (!userMatch) {
          setFormError("*Email not found. Please sign up.");
        } else if (userMatch.password !== formData.password) {
          setFormError("*Incorrect password.");
        } else {
          console.log("✅ Logged in:", userMatch.email);
          onLoginSuccess(userMatch);
        }
      }
    } catch (err) {
      console.error("Login/Signup error:", err);
      setFormError("*Something went wrong. Try later.");
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
