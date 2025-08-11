import React from "react";
import "./Concepts.css";
import { FaHtml5 } from "react-icons/fa";

function HtmlConcepts() {
  const topics = [
    { title: "Introduction to HTML", def: "Markup language for creating web pages." },
    { title: "Document Structure", def: "Standard layout with doctype, head, and body." },
    { title: "Elements & Tags", def: "Building blocks enclosed in angle brackets." },
    { title: "Attributes", def: "Extra information added to HTML elements." },
    { title: "Headings", def: "Titles from <h1> to <h6>." },
    { title: "Paragraphs", def: "Blocks of text using <p>." },
    { title: "Text Formatting", def: "Bold, italic, underline, and other styles." },
    { title: "Links", def: "Navigational elements using <a>." },
    { title: "Images", def: "Display pictures using <img>." },
    { title: "Tables", def: "Organize data in rows and columns." },
    { title: "Lists", def: "Ordered, unordered, and definition lists." },
    { title: "Forms", def: "Collect user input with text, checkboxes, and buttons." },
  ];

  return (
    <div className="topics-container">
      <h2 className="topics-title">HTML Topics</h2>
      {topics.map((t, i) => (
        <div key={i} className="topic-item">
          <FaHtml5 className="topic-icon" />
          <p className="topic-text">
            <b>{t.title}:</b> {t.def}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HtmlConcepts;
