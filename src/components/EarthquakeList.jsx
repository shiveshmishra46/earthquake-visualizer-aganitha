import React from 'react';
import EarthquakeItem from './EarthquakeItem';
import '../styles/EarthquakeList.css';

const EarthquakeList = ({ earthquakes, onSelectEarthquake, selectedEarthquake }) => {
  return (
    <div className="earthquake-list">
      <h2>Recent Earthquakes</h2>
      {earthquakes.length === 0 ? (
        <p className="no-earthquakes">No earthquakes match your current filters.</p>
      ) : (
        // This is the scrollable container with fixed height
        <div className="list-scroll-container" style={{ height: '400px', maxHeight: '400px', overflow: 'auto' }}>
          <div className="list-container">
            {earthquakes.map(earthquake => (
              <EarthquakeItem 
                key={earthquake.id} 
                earthquake={earthquake} 
                isSelected={selectedEarthquake?.id === earthquake.id}
                onClick={() => onSelectEarthquake(earthquake)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EarthquakeList;