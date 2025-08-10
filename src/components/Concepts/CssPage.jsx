// src/components/CssPage.jsx

import React from 'react';

function CssPage() {
  return (
    <div className="concept-content">
      <h2>CSS: Cascading Style Sheets</h2>

      <div className="concept-item">
        <h3>Introduction</h3>
        <p>CSS is used to apply styles to HTML elements. It controls the visual presentation, including colors, fonts, layout, and spacing, making webpages more beautiful and readable.</p>
      </div>

      <div className="concept-item">
        <h3>Implementing CSS</h3>
        <p>There are three ways to add CSS to a project:</p>
        <ul>
          <li><strong>Inline Styles:</strong> Applied directly to an HTML tag using the <code>style</code> attribute. (e.g., <code>&lt;h1 style="color: red;"&gt;</code>)</li>
          <li><strong>Internal Style Sheets:</strong> Placed within a <code>&lt;style&gt;</code> tag in the HTML <code>&lt;head&gt;</code> section. Styles here apply to the entire page.</li>
          <li><strong>External Style Sheets:</strong> Saved in a separate <code>.css</code> file and linked to the HTML file. This is the best practice for maintaining styles across multiple pages.</li>
        </ul>
      </div>

      <div className="concept-item">
        <h3>Selectors</h3>
        <p>Selectors are patterns used to select and style HTML elements. The most common types are:</p>
        <ul>
          <li><strong>Tag Selector:</strong> Selects all elements of a specific tag (e.g., <code>h1</code>).</li>
          <li><strong>ID Selector:</strong> Selects a single, unique element with a specific ID (e.g., <code>#special</code>).</li>
          <li><strong>Class Selector:</strong> Selects all elements that share a specific class name (e.g., <code>.highlight</code>).</li>
        </ul>
      </div>

      <div className="concept-item">
        <h3>Core Properties</h3>
        <ul>
          <li><code>color</code>: Sets the text color.</li>
          <li><code>background-color</code>: Sets the background color of an element.</li>
          <li><code>font-family</code>, <code>font-size</code>, <code>font-weight</code>: Control the text's appearance.</li>
          <li><code>margin</code>: The space *outside* an element's border.</li>
          <li><code>padding</code>: The space *inside* an element's border.</li>
        </ul>
      </div>
    </div>
  );
}

export default CssPage;