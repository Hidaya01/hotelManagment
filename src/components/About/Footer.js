import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Hotel Management App. All rights reserved.</p>
        <p>
          Follow us on 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, and 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>.
        </p>
      </div>
      </footer>
  );
}

export default Footer;
