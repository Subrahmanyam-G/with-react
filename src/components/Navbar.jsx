import React from 'react';

function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      {/* These items will stay on the left by default */}
      <h1 className="navbar-brand">React Masterclass</h1>
      <div className="navbar-links">
        <button onClick={() => onNavigate('home')}>About Me</button>
        <button onClick={() => onNavigate('concepts')}>Concepts</button>
      </div>

      {/* This item will be pushed to the far right */}
      <div className="navbar-linksLog">
        <button onClick={() => alert('Login functionality not implemented.')}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;