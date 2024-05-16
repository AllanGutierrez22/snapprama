import React, { useState } from 'react';
import './Navbar.css';
import logo from './snapprama.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img
            src={logo}
            alt="Brand Logo"
            className="navbar-logo"
            style={{ width: '118px', height: '18px' }}
           
          />
        </a>
      </div>
      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
      <a href="/Home">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        

         <div className="navbar-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;