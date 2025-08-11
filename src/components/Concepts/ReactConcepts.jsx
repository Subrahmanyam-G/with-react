import React from "react";
import "./Concepts.css";

const ReactOverview = () => {
  return (
    <div className="topics-container">
      <h2 className="topics-title">React.js Topics</h2>

      <div className="topic-item">
        <span className="topic-icon">⚛️</span>
        <span className="topic-text"><b>Introduction to React:</b> Created by Jordan Walke. A JavaScript library for building user interfaces, modular and efficient, ideal for dynamic applications.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">⚡</span>
        <span className="topic-text"><b>Why Use React?</b> Simplifies UI development, improves performance with Virtual DOM, and enhances code reusability.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">📦</span>
        <span className="topic-text"><b>React Installation:</b> Install via Create React App, Vite, or integrate into an existing project using npm or yarn.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🔑</span>
        <span className="topic-text"><b>Key Features:</b> Component-based architecture, Virtual DOM, Unidirectional data flow, JSX syntax, SEO-friendly.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🧩</span>
        <span className="topic-text"><b>Components:</b> The building blocks of a React app. Can be Class-based or Functional (modern approach focuses on functional).</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🌐</span>
        <span className="topic-text"><b>Virtual DOM:</b> Lightweight copy of the actual DOM, updates efficiently without full-page re-renders.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">📝</span>
        <span className="topic-text"><b>JSX:</b> Special syntax for writing React elements. Similar to HTML but supports JavaScript expressions inside curly braces.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🎨</span>
        <span className="topic-text"><b>Styling in React:</b> Inline styles, CSS classes, CSS modules, or styled-components for modular styling.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🔄</span>
        <span className="topic-text"><b>State:</b> Stores dynamic data in a component. Managed using the useState hook in functional components.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">📩</span>
        <span className="topic-text"><b>Props:</b> Read-only data passed from parent to child components for customization.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">⏳</span>
        <span className="topic-text"><b>Lifecycle Methods:</b> Different phases of a component — Mounting, Updating, and Unmounting.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🪝</span>
        <span className="topic-text"><b>React Hooks:</b> Special functions like useState and useEffect that allow state and lifecycle features in functional components.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">📋</span>
        <span className="topic-text"><b>Forms:</b> Controlled (state-based) and uncontrolled (ref-based) form handling in React.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🔍</span>
        <span className="topic-text"><b>Refs:</b> Access DOM elements directly using the useRef hook.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🗺️</span>
        <span className="topic-text"><b>Routing:</b> Navigation in single-page apps using React Router — BrowserRouter, Routes, Route, and parameters.</span>
      </div>

      <div className="topic-item">
        <span className="topic-icon">🛠️</span>
        <span className="topic-text"><b>State Management with Redux:</b> Centralized state handling using Actions, Reducers, Store, and Middleware.</span>
      </div>

    </div>
  );
};

export default ReactOverview;
