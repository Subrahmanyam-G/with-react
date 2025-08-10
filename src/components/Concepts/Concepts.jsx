// src/components/Concepts.jsx

import React, { useState } from 'react';

function Concepts() {
  const [activeTab, setActiveTab] = useState('html');

  const renderContent = () => {
    switch (activeTab) {
      // --- HTML CONTENT ---
      case 'html':
        return (
          <div className="tab-content">
            <h3>HTML: The Skeleton of the Web</h3>
            <p>HTML (HyperText Markup Language) provides the essential structure for web pages. Think of it as the skeleton that holds all the content together.</p>

            <div className="concept-item">
              <h4>1. Elements & Tags</h4>
              <p><strong>Definition:</strong> An HTML element is a piece of a webpage. It's defined by a start tag, some content, and an end tag. Tags are the keywords in angle brackets.</p>
              <pre><code>{`<p>This is a paragraph element.</p>`}</code></pre>
            </div>

            <div className="concept-item">
              <h4>2. Attributes</h4>
              <p><strong>Definition:</strong> Attributes provide additional information about an element and are always specified in the start tag.</p>
              <pre><code>{`<!-- The 'href' attribute specifies the link's destination -->\n<a href="https://www.google.com">Visit Google</a>`}</code></pre>
            </div>

            <div className="concept-item">
              <h4>3. Basic Document Structure</h4>
              <p><strong>Definition:</strong> Every HTML document has a standard structure that includes the doctype, html, head, and body sections.</p>
              <pre><code>
{`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`}
              </code></pre>
            </div>
          </div>
        );

      // --- CSS CONTENT ---
      case 'css':
        return (
          <div className="tab-content">
            <h3>CSS: The Style of the Web</h3>
            <p>CSS (Cascading Style Sheets) is the language we use to style an HTML document. It describes how HTML elements should be displayed, including colors, fonts, and layout.</p>

            <div className="concept-item">
              <h4>1. Selectors & Properties</h4>
              <p><strong>Definition:</strong> A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style, and the block contains properties and values.</p>
              <pre><code>
{`/* This selects all <p> elements */
p {
  color: blue; /* Sets the text color */
  font-size: 16px; /* Sets the font size */
}`}
              </code></pre>
            </div>

            <div className="concept-item">
              <h4>2. The Box Model</h4>
              <p><strong>Definition:</strong> Every HTML element is essentially a box. The CSS box model describes the space it takes up, consisting of: Content, Padding, Border, and Margin.</p>
              <pre><code>
{`.my-box {
  padding: 20px;  /* Space inside the border */
  border: 1px solid black; /* The border itself */
  margin: 10px;   /* Space outside the border */
}`}
              </code></pre>
            </div>

            <div className="concept-item">
              <h4>3. Flexbox for Layout</h4>
              <p><strong>Definition:</strong> Flexbox is a modern layout model that provides an efficient way to align and distribute space among items in a container, even when their size is unknown.</p>
              <pre><code>
{`.container {
  display: flex;
  justify-content: space-around; /* Distributes items evenly */
}`}
              </code></pre>
            </div>
          </div>
        );

      // --- JAVASCRIPT CONTENT ---
      case 'js':
        return (
          <div className="tab-content">
            <h3>JavaScript: The Brains of the Web</h3>
            <p>JavaScript is a programming language that adds interactivity and dynamic behavior to websites. If HTML is the skeleton and CSS is the style, JS is the brain.</p>

            <div className="concept-item">
              <h4>1. Variables</h4>
              <p><strong>Definition:</strong> Variables are containers for storing data values. In modern JS, we use <code>let</code> for variables that can change and <code>const</code> for constants.</p>
              <pre><code>{`let message = "Hello, Subbu!";\nconst year = 2024;`}</code></pre>
            </div>

            <div className="concept-item">
              <h4>2. Functions</h4>
              <p><strong>Definition:</strong> A function is a reusable block of code designed to perform a particular task. It can be "called" or invoked to run the code inside it.</p>
              <pre><code>
{`function greet(name) {
  return "Hello, " + name;
}

// Using the function
let greeting = greet("Student"); // "Hello, Student"`}
              </code></pre>
            </div>

            <div className="concept-item">
              <h4>3. DOM Manipulation & Events</h4>
              <p><strong>Definition:</strong> JavaScript can interact with the Document Object Model (DOM), which is the structure of the HTML page. It can change content, styles, and react to user events like clicks.</p>
              <pre><code>
{`const myButton = document.getElementById('btn');

myButton.addEventListener('click', () => {
  alert('Button was clicked!');
});`}
              </code></pre>
            </div>
          </div>
        );

      // --- REACT CONTENT ---
      case 'react':
        return (
          <div className="tab-content">
            <h3>React: Building User Interfaces</h3>
            <p>React is a JavaScript library for building fast and interactive user interfaces (UIs). Its main idea is to break the UI into small, reusable pieces called components.</p>
            
            <div className="concept-item">
              <h4>1. Components</h4>
              <p><strong>Definition:</strong> Components are the building blocks of a React application. They are like custom, reusable HTML elements that manage their own content and logic.</p>
              <pre><code>
{`function WelcomeMessage() {
  return <h1>Hello from my first component!</h1>;
}`}
              </code></pre>
            </div>
            
            <div className="concept-item">
              <h4>2. JSX (JavaScript XML)</h4>
              <p><strong>Definition:</strong> JSX is a syntax extension that allows you to write HTML-like code directly in your JavaScript. It makes creating component layouts intuitive and readable.</p>
              <pre><code>{`const element = <h1>Hello, world!</h1>;`}</code></pre>
            </div>

            <div className="concept-item">
              <h4>3. State and Props</h4>
              <p><strong>Definition:</strong> <strong>Props</strong> are used to pass data from a parent component down to a child. <strong>State</strong> is data managed *inside* a component that can change over time. When state changes, React automatically re-renders the UI.</p>
              <pre><code>
{`function Counter() {
  // 'useState' is a Hook to add state to a component
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}`}
              </code></pre>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="concepts-page"> 
      <div className="tabs">
        <button onClick={() => setActiveTab('html')} className={activeTab === 'html' ? 'active' : ''}>HTML</button>
        <button onClick={() => setActiveTab('css')} className={activeTab === 'css' ? 'active' : ''}>CSS</button>
        <button onClick={() => setActiveTab('js')} className={activeTab === 'js' ? 'active' : ''}>JavaScript</button>
        <button onClick={() => setActiveTab('react')} className={activeTab === 'react' ? 'active' : ''}>React</button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Concepts;