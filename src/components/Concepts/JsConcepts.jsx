import React from "react";
import "./Concepts.css";
import { FaJsSquare } from "react-icons/fa";

function JsConcepts() {
  const topics = [
    { title: "Introduction to JavaScript", def: "Programming language for web interactivity." },
    { title: "Adding JavaScript", def: "Inline, internal, or external scripts." },
    { title: "Variables", def: "Store data using var, let, or const." },
    { title: "Data Types", def: "String, number, boolean, object, array, null, undefined." },
    { title: "Functions", def: "Reusable blocks of code for specific tasks." },
    { title: "Events", def: "Respond to user actions like clicks or input." },
    { title: "DOM Manipulation", def: "Change HTML and CSS dynamically." },
    { title: "Conditionals", def: "Control flow with if-else and switch." },
    { title: "Loops", def: "Repeat actions with for, while, do-while." },
    { title: "Arrays", def: "Store multiple values in one variable." },
    { title: "Objects", def: "Group related data as key-value pairs." },
    { title: "ES6 Features", def: "Arrow functions, template literals, destructuring." },
  ];

  return (
    <div className="topics-container">
      <h2 className="topics-title">JavaScript Topics</h2>
      {topics.map((t, i) => (
        <div key={i} className="topic-item">
          <FaJsSquare className="topic-icon" />
          <p className="topic-text">
            <b>{t.title}:</b> {t.def}
          </p>
        </div>
      ))}
    </div>
  );
}

export default JsConcepts;
