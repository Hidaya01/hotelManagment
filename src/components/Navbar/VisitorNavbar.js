import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function VisitorNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Login">Login</Link></li>
        
      </ul>
    </nav>
  );
}

export default VisitorNavbar;
