import React from "react";
import { FaReact, FaCode, FaBolt } from "react-icons/fa";
import "./Welcome.css";

function Welcome({ onLoginClick }) {
  return (
    <div className="welcome-container">
      <div className="welcome-icon">
        <FaReact className="react-logo" />
      </div>
      <h1 className="welcome-title">Welcome to the React Learning Hub</h1>
      <p className="welcome-subtitle">
        Build interactive UIs, master JavaScript, and create awesome web apps!
      </p>

      <div className="welcome-features">
        <div className="feature-card">
          <FaCode className="feature-icon" />
          <h3>Learn by Doing</h3>
          <p>Practice with live coding examples right inside the browser.</p>
        </div>
        <div className="feature-card">
          <FaBolt className="feature-icon" />
          <h3>Fast & Interactive</h3>
          <p>React updates your UI instantly as you code and test ideas.</p>
        </div>
        <div className="feature-card">
          <FaReact className="feature-icon" />
          <h3>Component-Based</h3>
          <p>Break your UI into reusable building blocks for any project.</p>
        </div>
      </div>

      <button className="welcome-button" onClick={onLoginClick}>
        🚀 Start Learning
      </button>
    </div>
  );
}

export default Welcome;
