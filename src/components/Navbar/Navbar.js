import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/Login">Login</Link></li> 
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/reservation/new">New Reservation</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/feedbacks">Feedbacks</Link></li>
        <li><Link to="/feedback/new">New Feedback</Link></li>
     
      </ul>
    </nav>
  );
}

export default Navbar;
