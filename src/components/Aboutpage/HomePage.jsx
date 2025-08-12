import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate(); // get navigate function

  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="hero-subtitle">WELCOME TO MY SESSION</p>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Subrahmanyam</span>
        </h1>
        <TypeAnimation
          sequence={[
            'a Technology Analyst.', 2000,
            'a React Developer.', 2000,
            'a Frontend Specialist.', 2000,
          ]}
          wrapper="h2"
          className="hero-role"
          speed={50}
          repeat={Infinity}
        />
        <p className="hero-description">
          As a Technology Analyst at Infosys with over 3 years of experience, I specialize in building scalable and interactive frontend applications using ReactJS, TypeScript, and modern web technologies.
        </p>
        <button
          className="hero-button"
          onClick={() => navigate('/experience')}  // navigate to /experience route
        >
          More About Me
        </button>
      </div>

      <div className="hero-image-container">
        <img src="profile.png" alt="Profile"  className="hero-image" />
      </div>
    </section>
  );
}

export default HomePage;
