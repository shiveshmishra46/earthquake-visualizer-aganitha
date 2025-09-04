import React from 'react';
import { formatDate, formatMagnitude, getMagnitudeColor, formatLocationName } from '../utils/formatters';
import '../styles/EarthquakeList.css';

const EarthquakeItem = ({ earthquake, onClick, isSelected }) => {
  const { magnitude, place, time, tsunami } = earthquake;
  
  return (
    <div 
      className={`earthquake-item ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      <div className="magnitude-indicator" style={{ backgroundColor: getMagnitudeColor(magnitude) }}>
        {formatMagnitude(magnitude)}
      </div>
      <div className="earthquake-details">
        <h3 className="earthquake-location">{formatLocationName(place)}</h3>
        <p className="earthquake-time">{formatDate(time)}</p>
        {tsunami === 1 && <div className="tsunami-badge">Tsunami</div>}
      </div>
    </div>
  );
};

export default EarthquakeItem;