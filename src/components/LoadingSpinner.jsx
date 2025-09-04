import React from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading earthquake data...</p>
    </div>
  );
};

export default LoadingSpinner;