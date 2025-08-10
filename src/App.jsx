import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Concepts from './components/Concepts/Concepts'
import ExperiencePage from './components/ExperiencePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('home');

  // This function decides which component to show based on the activeView state
  const renderContent = () => {
    if (activeView === 'home') {
      return <HomePage onNavigate={setActiveView} />;
    }
    if (activeView === 'experience') {
      return <ExperiencePage />;
    }
    // --- THIS IS THE NEW LOGIC YOU NEED ---
    if (activeView === 'concepts') {
      return <Concepts />;
    }
    // ------------------------------------
  };

  return (
    // This wrapper is important for your footer layout to work correctly
    <div className="app-container"> 
      <Navbar onNavigate={setActiveView} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;