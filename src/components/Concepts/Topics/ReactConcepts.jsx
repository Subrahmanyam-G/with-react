import React from "react";
import "../Concepts.css";
import { FaReact } from "react-icons/fa";

function ReactTopics() {
  const topics = [
    { title: "What is React?", def: "JavaScript library for building modular, efficient UIs." },
    { title: "Key Features", def: "Components, Virtual DOM, one-way data flow, JSX, SEO-friendly." },
    { title: "React Components", def: "Smallest UI units that enhance maintainability." },
    { title: "Virtual DOM", def: "Lightweight DOM copy for faster updates." },
    { title: "Types of Components", def: "Class-based and functional (modern focus on functional)." },
    { title: "Styling React Components", def: "Inline styles, CSS classes, styled-components." },
    { title: "JSX", def: "HTML-like syntax compiled to JavaScript." },
    { title: "State & Props", def: "Manage dynamic data and pass values between components." },
    { title: "Lifecycle Methods", def: "Mount, update, and unmount phases of components." },
    { title: "Hooks", def: "Functions like useState and useEffect for state and side effects." },
    { title: "Forms", def: "Controlled and uncontrolled components for user input." },
    { title: "Refs", def: "Directly access DOM elements." },
    { title: "Routing", def: "Navigate between views with React Router." },
    { title: "Redux", def: "Centralized state management with actions, reducers, and store." }
  ];

  return (
    <div className="topics-container">
      <h2 className="topics-title">React.js Topics</h2>
      {topics.map((t, i) => (
        <div key={i} className="topic-item">
          <FaReact className="topic-icon" />
          <p className="topic-text">
            <b>{t.title}:</b> {t.def}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ReactTopics;
