import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Earthquake Visualizer</h1>
        <p>Explore recent seismic activity around the world</p>
      </div>
    </header>
  );
};

export default Header;