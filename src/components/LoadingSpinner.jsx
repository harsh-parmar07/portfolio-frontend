import React from 'react';
import '../styles/main.css';
import '../styles/animations.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading portfolio...</p>
    </div>
  );
};

export default LoadingSpinner;