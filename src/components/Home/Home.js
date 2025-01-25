import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

function Home() {
  const location = useLocation();
  
  const { email } = location.state || { email: 'Guest' };

  return (
    <div className="home-container">
      <h1>Welcome to Hotel Reservation, {email}!</h1>
      <p>This is your home page.</p>
      <p>Choose your city and book your stay with us!</p>
    </div>
  );
}

export default Home;
