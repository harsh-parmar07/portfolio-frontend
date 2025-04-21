import React from 'react';
import Navbar from './Navbar';
import '../styles/main.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Your Name</h1>
        <h2>Full Stack Developer</h2>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;