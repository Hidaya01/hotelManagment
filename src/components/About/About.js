import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Our Hotel Reservation System</h1>
      <p>
        Welcome to our Hotel Reservation System! This application allows you to book hotels in various cities, manage your reservations, and update your profile. Our goal is to provide a seamless and user-friendly experience for all our customers.
      </p>
      <p>Features include:</p>
      <ul>
        <li>City selection for reservations</li>
        <li>CRUD operations for reservations</li>
        <li>Profile management</li>
        <li>Secure authentication</li>
        <li>Customer feedback management</li>
      </ul>
      <p>
        Developed by a dedicated team of professionals, this project is built using React, Redux Toolkit, and React Router. We hope you enjoy using our system and find it helpful for all your hotel booking needs.
      </p>
    </div>
  );
}

export default About;
