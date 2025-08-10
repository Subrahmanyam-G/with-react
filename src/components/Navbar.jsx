// src/components/Navbar.jsx

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">React Masterclass</h1>

      {/* This is the main menu container */}
      <div className={isOpen ? 'navbar-menu open' : 'navbar-menu'}>
        {/* These are the links that should stay on the left */}
        <div className="navbar-links">
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }}>About Me</button>
          <button onClick={() => { onNavigate('concepts'); setIsOpen(false); }}>Concepts</button>
          <button onClick={() => { onNavigate('experience'); setIsOpen(false); }}>Experience</button>
        </div>
        {/* This is the link that should move to the right */}
        <div className="navbar-login">
          <button onClick={() => alert('Login functionality not implemented.')}>Login</button>
        </div>
      </div>

      <div className="hamburger" onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;