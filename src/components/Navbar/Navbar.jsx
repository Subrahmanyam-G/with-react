import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Dialog from './LoginPage/Dialog.jsx'; // Import the new Dialog component

function Navbar({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false); // New state for dialog
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    onLogout();
    setShowLogoutDialog(false); // Close dialog
    navigate("/"); // redirect to welcome page
  };

  const openLogoutDialog = () => {
    setShowLogoutDialog(true);
  };

  const closeLogoutDialog = () => {
    setShowLogoutDialog(false);
  };

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div className="navbar-brand">
        <Link to="/" onClick={() => setMenuOpen(false)}>Reactify Hub</Link>
      </div>

      {/* Mobile menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu items */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <div className="navbar-links">
          {user && (
            <>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
              <Link to="/concepts" onClick={() => setMenuOpen(false)}>Concepts</Link>
            </>
          )}
        </div>

        {/* Login/Logout aligned to right */}
        <div className="navbar-login" style={{ marginLeft: "auto" }}>
          {user ? (
            <>
              <span>Hi, {user.name}</span>
              <button onClick={openLogoutDialog}>Logout</button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          )}
        </div>
      </div>
      
      {showLogoutDialog && (
        <Dialog
          message="Are you sure you want to log out?"
          onConfirm={handleLogout}
          onCancel={closeLogoutDialog}
        />
      )}
    </nav>
  );
}

export default Navbar;