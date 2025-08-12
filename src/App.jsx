import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Aboutpage/HomePage";
import Concepts from "./components/Concepts/Concepts";
import ExperiencePage from "./components/JourneyPage/Journey";
import Footer from "./components/Footer/Footer";
import Login from "./components/Navbar/LoginPage/Login";
import Welcome from "./components/WelcomePage/Welcome";
import "./App.css";
import { addUser } from "./api";

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app mount
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = (formData) => {
    const loggedInUser = { name: formData.name };
    setUser(loggedInUser);

    // Persist login
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    // Save user in backend (async)
    addUser({ ...formData, createdAt: new Date().toISOString() }).catch((error) =>
      console.error("Error saving user:", error)
    );
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar user={user} onLogout={handleLogout} />

        <main>
          <Routes>
            {/* Public route */}
            {!user && (
              <Route
                path="/"
                element={<Welcome onLoginClick={() => window.location.href = "/login"} />}
              />
            )}

            {/* Authenticated routes */}
            {user && <Route path="/" element={<HomePage />} />}
            {user && <Route path="/experience" element={<ExperiencePage />} />}
            {user && <Route path="/concepts" element={<Concepts />} />}

            {/* Login route */}
            {!user && <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />}

            {/* Redirect any unknown path */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
