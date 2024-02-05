
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <div className="header">
        <img className="logo" src="/logo192.png" alt="Logo" />
        <div className="title">Title</div>
      </div>

      <div className="navbar">
        <div
          className={`nav-item ${activeSection === 'Home' ? 'active' : ''}`}
          onClick={() => handleSectionClick('Home')}
        >
          Home
        </div>
        <div
          className={`nav-item ${activeSection === 'About' ? 'active' : ''}`}
          onClick={() => handleSectionClick('About')}
        >
          About
        </div>
      </div>

      <div className="content-container">
        <div className="content">
          {activeSection === 'Home' && <Home />}
          {activeSection === 'About' && <About />}
        </div>
      </div>
    </div>
  );
};

export default App;
