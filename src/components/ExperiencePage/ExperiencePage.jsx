import React, { useState } from 'react';
import './ExperiencePage.css'

// We'll store your experience data in an array of objects
const experienceData = [
  {
    title: 'Infosys Ltd - Technology Analyst',
    content: `
      <p><strong>Duration:</strong> 3.6 years</p>
      <p>As a Technology Analyst, my primary focus is on developing robust and scalable frontend applications.</p>
      <ul>
        <li><strong>Frontend:</strong> ReactJS, TypeScript, JavaScript (ES6+), HTML, CSS, Tailwind CSS</li>
        <li><strong>Testing Tools:</strong> Cypress, Jest</li>
        <li><strong>Backend & Data:</strong> GraphQL, Node.js, Express.js, MongoDB</li>
        <li><strong>Tools & Methodologies:</strong> Git, Bitbucket, Sonar, Agile</li>
      </ul>
    `
  },
  {
    title: 'Aditya College of Engineering - B.Tech, Mechanical Engineering',
    content: `
      <p><strong>Graduated:</strong> November 2021</p>
      <p>My engineering background provided me with strong problem-solving skills and a solid foundation in logical thinking, which I now apply to software development challenges.</p>
    `
  },
  {
    title: 'Session Topic: Building Scalable Frontend Applications with ReactJS',
    content: `
      <p>In this session, we explore the core principles of ReactJS for creating applications that are not only interactive but also maintainable and scalable. We will cover component-based architecture, state management, and best practices for building modern web interfaces.</p>
    `
  }
];

function ExperiencePage() {
  // This state will keep track of which accordion item is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  // This function handles the click event
  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="experience-page">
      <h2>My Journey & Expertise</h2>
      <div className="accordion">
        {experienceData.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {item.title}
              <span className="accordion-icon">{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
            >
              {/* dangerouslySetInnerHTML is used here to render the HTML from our data */}
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;