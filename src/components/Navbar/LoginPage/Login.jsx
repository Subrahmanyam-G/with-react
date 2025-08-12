import React, { useState } from "react";
import "./Login.css";

function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    gender: "",
    dateOfBirth: ""
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    const trimmed = value.trim();

    if (name === "name") {
      if (!trimmed) error = "Name is required";
      else if (!/^[A-Za-z\s]*$/.test(trimmed)) error = "Only letters allowed";
    }

    if (name === "number") {
        if (!/^\d*$/.test(value)) {
          error = "Only numbers are allowed";
        } else if (value.length !== 10 && value.length > 0) {
          error = "Phone number must be exactly 10 digits";
        }
      }

    if (name === "email") {
      if (!trimmed) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
        error = "Enter a valid email";
    }

    if (name === "gender" && !trimmed) error = "Please select a gender";
    if (name === "dateOfBirth" && !trimmed) error = "Please select a date";

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
    });

    const hasErrors = Object.values(errors).some((err) => err);
    const hasEmpty = Object.values(formData).some((val) => !val.trim());

    if (!hasErrors && !hasEmpty) {
      onLoginSuccess(formData);
    }
  };

  const isDisabled =
    Object.values(errors).some((e) => e) ||
    Object.values(formData).some((val) => !val.trim());

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="label-default">Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <label className="label-default">Phone Number</label>
<input
  type="tel"
  name="number"
  value={formData.number}
  onChange={handleChange}
  onFocus={handleFocus}
  maxLength={10}  // prevents typing more than 10 digits
  pattern="\d{10}" // ensures exactly 10 digits on submit
  title="Phone number must be exactly 10 digits"
  required
/>
{errors.number && <span className="error-message">{errors.number}</span>}

          <label className="label-default">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          <label className="label-black">Gender</label>
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

          <label className="label-black">Date of Birth</label>
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

          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
