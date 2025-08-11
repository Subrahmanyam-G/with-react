import React, { useState } from "react";
import HtmlConcepts from './HtmlConcepts';
import CssConcepts from './CssConcepts';
import JsConcepts from './JsConcepts';
import ReactConcepts from './ReactConcepts';
import "./Concepts.css";

function Concepts() {
  const [activeTab, setActiveTab] = useState("html");

  const renderContent = () => {
    switch (activeTab) {
      case "html":
        return <HtmlConcepts />;
      case "css":
        return <CssConcepts />;
      case "js":
        return <JsConcepts />;
      case "react":
        return <ReactConcepts />;
      default:
        return null;
    }
  };

  return (
    <div className="concepts-page">
      <div className="tabs">
        <button
          onClick={() => setActiveTab("html")}
          className={activeTab === "html" ? "active" : ""}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab("css")}
          className={activeTab === "css" ? "active" : ""}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab("js")}
          className={activeTab === "js" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => setActiveTab("react")}
          className={activeTab === "react" ? "active" : ""}
        >
          React
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Concepts;
