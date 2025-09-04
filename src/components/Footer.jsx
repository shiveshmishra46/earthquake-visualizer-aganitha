import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Data provided by <a href="https://earthquake.usgs.gov/" target="_blank" rel="noopener noreferrer">USGS</a> Earthquake API
        </p>
        <p>
          Created for Casey, the Geography Student
        </p>
      </div>
    </footer>
  );
};

export default Footer;