import React from "react";
import "../Concepts.css";
import { FaCss3Alt } from "react-icons/fa";

function CssConcepts() {
  const topics = [
    { title: "Introduction to CSS", def: "Stylesheet language for designing web pages." },
    { title: "Ways to Apply CSS", def: "Inline, internal, and external styles." },
    { title: "Syntax", def: "Selector, property, and value structure." },
    { title: "Selectors", def: "Target HTML elements for styling." },
    { title: "Colors", def: "Define using names, HEX, RGB, or HSL." },
    { title: "Backgrounds", def: "Add background colors or images." },
    { title: "Fonts", def: "Control font type, size, and weight." },
    { title: "Box Model", def: "Content, padding, border, and margin." },
    { title: "Positioning", def: "Static, relative, absolute, fixed, sticky." },
    { title: "Display", def: "Block, inline, flex, grid, and none." },
    { title: "Flexbox", def: "Align and distribute items in a container." },
    { title: "Grid", def: "Create two-dimensional layouts." },
  ];

  return (
    <div className="topics-container">
      <h2 className="topics-title">CSS Topics</h2>
      {topics.map((t, i) => (
        <div key={i} className="topic-item">
          <FaCss3Alt className="topic-icon" />
          <p className="topic-text">
            <b>{t.title}:</b> {t.def}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CssConcepts;
