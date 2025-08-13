import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaTools, FaChevronDown } from "react-icons/fa";
import './Journey.css'

const Journey = () => {
  // Array of strings for professional summary
  const professionalSummary = [
    "Frontend Developer with 2.9 years of experience building responsive, scalable, and user-friendly web applications using ReactJS, TypeScript, and JavaScript.",
    "Skilled in optimizing performance, writing clean and maintainable code, and collaborating in Agile methodologies.",
    "Proficient in tools like Jest, Tailwind CSS, and Bitbucket.",
    "Experienced in leveraging GraphQL and Cypress for robust application testing and efficient data handling."
  ];

  // Array of strings for work experience details
  const workExperience = [
    "Built responsive and scalable web applications using ReactJS, TypeScript, and modern JavaScript (ES6+).",
    "Migrated and refactored legacy codebases to modern React standards.",
    "Developed reusable components, integrated RESTful APIs, and managed state with Context API.",
    "Improved performance with code-splitting, lazy loading, and optimized rendering.",
    "Wrote unit and integration tests with Jest and React Testing Library.",
    "Utilized GraphQL for efficient data querying and Cypress for end-to-end testing.",
    "Collaborated in Agile teams to deliver high-quality solutions."
  ];

  // Array of strings for educational background
  const education = [
    "B.Tech in Mechanical Engineering - Aditya College of Engineering and Technology (May 2018 - Nov 2021)"
  ];

  // Array of strings for projects
  const projects = [
    "Offline Council - Migrated codebase to TypeScript & React, improved scalability, implemented lazy loading, code-splitting, and maintained high test coverage.",
    "Financing Website - Developed credit card management pages, improved UI/UX, used GraphQL & Cypress for testing."
  ];

  // Array of strings for skills
  const skills = [
    "Frontend: HTML, CSS, Tailwind CSS, JavaScript (ES6+), TypeScript, ReactJS",
    "Testing: Cypress, Jest",
    "Backend: GraphQL, Node.js, Express.js",
    "Tools: Git, Bitbucket, Sonar, Agile Methodologies, MongoDB"
  ];

  // Helper component for expandable sections
  const ExpandableSection = ({ title, icon, items }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="topics-container Login-red-card">
        <div className="topics-title expandable-header" onClick={() => setIsExpanded(!isExpanded)}>
          <h2>{icon} {title}</h2>
          <FaChevronDown className={`chevron-icon ${isExpanded ? 'expanded' : ''}`} />
        </div>
        <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
          {items.map((item, index) => (
            <div key={index} className="topic-item">
              <span className="topic-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="black-card">
      <div className="journey-title-container">
        <h1 className="topics-title">🚀 My Journey</h1>
        <div className="Login-divider-line"></div>
      </div>
      <div className="content-wrapper">
        {/* Render each section with the new ExpandableSection component */}
        <ExpandableSection title="Professional Summary" icon={<FaBriefcase />} items={professionalSummary} />
        <ExpandableSection title="Work Experience" icon={<FaBriefcase />} items={workExperience} />
        <ExpandableSection title="Education" icon={<FaGraduationCap />} items={education} />
        <ExpandableSection title="Projects" icon={<FaProjectDiagram />} items={projects} />
        <ExpandableSection title="Skills" icon={<FaTools />} items={skills} />
      </div>
    </div>
  );
};

export default Journey;
