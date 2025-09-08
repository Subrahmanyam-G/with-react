import React from "react";
import "../Concepts.css";
import { FaCss3Alt } from "react-icons/fa";

function CssConcepts() {
  const topics = [
    { title: "Introduction to CSS", def: "Stylesheet language for designing web pages." },
    { title: "Ways to Apply CSS", def: "Inline, internal, and external styles." },
    { title: "Syntax", def: "CSS Syntax has two main parts: a selector, and one or more declarations.` The selector is normally the HTML element that you want to apply the style. Each declaration consists of a property and a value" },
    { title: " Inline Style Sheets", def: "Styles that can be applied to one line i.e., one tag are said to be inline style sheets. In thisstyle can be written inside the tag with the help of style attribute." },
    { title: "Internal Style Sheets", def: "Styles that can be applicable to one entire web page is said to be Internal style sheet. Here aseparate style tag will be included in head part that specifies selectors and the related styles." },
    { title: "External Style Sheets", def: "Styles that can be applicable to one or more web pages are said to be external style sheets. Here styles will be saved as separate file with the extension name .css and each html file will belinked with that external css file with the help of link tag" },
    { title: "Selector", def: "CSS selectors are used to select the tags/elements that we want to apply the styles. Generally, there are 5 different CSS selectors Simple:-1)selectors, 2)Combinator selectors,3)Pseudo-class selectors,4)Pseudo-elements selectors,5)Attribute selectors"},
    { title: "Simple selectors", def: "In this, we select elements based on tag name, id, class." },
    { title: "Combinator selectors", def: ": We can select elements based on a relationship between them." },
    { title: "Pseudo-class selectors", def: "We can select elements based on their state." },
    { title: "ColPseudo-elements selectors", def: "We can select & apply styles to part of an element." },
    { title: "Attribute selectors", def: "We can select elements based on attributes and their values." },
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
