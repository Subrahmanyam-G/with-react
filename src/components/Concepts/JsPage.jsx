// src/components/JsPage.jsx

import React from 'react';

function JsPage() {
  return (
    <div className="concept-content">
      <h2>JavaScript: The Brains</h2>

      <div className="concept-item">
        <h3>Introduction</h3>
        <p>JavaScript is the world's most popular scripting language. It brings interactivity to web pages and is executed by all modern browsers.</p>
      </div>
      
      <div className="concept-item">
        <h3>The &lt;script&gt; Tag</h3>
        <p>To insert JavaScript into an HTML page, we use the <code>&lt;script&gt;</code> tag. It can be placed in either the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> of the document.</p>
      </div>

      <div className="concept-item">
        <h3>Variables and Data Types</h3>
        <p>Variables are containers for storing data, declared using <code>var</code>, <code>let</code>, or <code>const</code>. JavaScript is "dynamically typed," meaning the data type is determined when a value is assigned.</p>
        <pre><code>
{`let name = "Subbu";     // String
let age = 30;          // Number
let isLearning = true; // Boolean`}
        </code></pre>
      </div>

      <div className="concept-item">
        <h3>Functions</h3>
        <p>A function is a reusable block of code that can be called to perform a specific task. This helps organize code and avoid repetition.</p>
        <pre><code>
{`function greet() {
  alert("Hello from your instructor, Subbu!");
}
greet(); // Calls the function`}
        </code></pre>
      </div>

      <div className="concept-item">
        <h3>Operators</h3>
        <p>JavaScript includes various operators for different tasks:</p>
        <ul>
          <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code></li>
          <li><strong>Comparison:</strong> <code>==</code> (equal value), <code>===</code> (equal value and type)</li>
          <li><strong>Logical:</strong> <code>&&</code> (and), <code>||</code> (or), <code>!</code> (not)</li>
        </ul>
      </div>
    </div>
  );
}

export default JsPage;