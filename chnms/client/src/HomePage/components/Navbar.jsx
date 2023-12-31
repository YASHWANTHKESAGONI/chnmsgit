import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/ourteam">Our Team</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
