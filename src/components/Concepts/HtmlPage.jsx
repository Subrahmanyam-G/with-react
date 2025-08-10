// src/components/HtmlPage.jsx

import React from 'react';

function HtmlPage() {
  return (
    <div className="concept-content">
      <h2>HTML: HyperText Markup Language</h2>
      
      <div className="concept-item">
        <h3>Introduction</h3>
        <p>HTML is the standard language used to create web pages. As a markup language, it uses tags to structure content.</p>
        <p>Any text between angular brackets, like <code>&lt;html&gt;</code>, is a tag. A complete piece, like <code>&lt;b&gt;Hello Subbu&lt;/b&gt;</code>, is an element (start tag + content + end tag).</p>
        <p>We provide extra information to tags using attributes. For example, in <code>&lt;body bgcolor="red"&gt;</code>, <code>bgcolor</code> is an attribute.</p>
      </div>

      <div className="concept-item">
        <h3>Program Structure</h3>
        <pre><code>
{`<!DOCTYPE html>
<html>
  <head>
    <!-- Title, CSS, Scripts, and Meta Info go here -->
  </head>
  <body>
    <!-- The main visible content of the webpage goes here -->
  </body>
</html>`}
        </code></pre>
      </div>

      <div className="concept-item">
        <h3>Core Tags</h3>
        <ul>
          <li><strong>Headings:</strong> <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> for titles.</li>
          <li><strong>Paragraphs:</strong> <code>&lt;p&gt;</code> for text blocks.</li>
          <li><strong>Links:</strong> <code>&lt;a href="..."&gt;</code> for navigation.</li>
          <li><strong>Images:</strong> <code>&lt;img src="..." alt="..."&gt;</code> to display images.</li>
          <li><strong>Lists:</strong> <code>&lt;ul&gt;</code> (unordered) and <code>&lt;ol&gt;</code> (ordered) with <code>&lt;li&gt;</code> items.</li>
          <li><strong>Tables:</strong> <code>&lt;table&gt;</code> with <code>&lt;tr&gt;</code> (rows), <code>&lt;th&gt;</code> (headers), and <code>&lt;td&gt;</code> (cells).</li>
        </ul>
      </div>

      <div className="concept-item">
        <h3>Forms</h3>
        <p>Forms, created with the <code>&lt;form&gt;</code> tag, allow users to interact with a webpage by inputting data. Key form elements include <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code>.</p>
      </div>
    </div>
  );
}

export default HtmlPage;