import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="left-section">
      <img src="image/logo.png" alt="Sahyog Club Logo" />
      <div className="club-info">
        <h1>Sahyog-The Student Wellbeing Club</h1>
        <p>NIT Raipur</p>
      </div>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/events">Our Events</Link>
      <Link to="/team">Our Team</Link>
      <Link to="/alumni">Our Alumni</Link>
    
      <Link to="/contact">Contact Us</Link>
    </div>
  </div>
);

export default Navbar;

