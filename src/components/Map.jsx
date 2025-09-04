import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { formatDate, getMagnitudeColor, getCircleRadius, formatMagnitude } from '../utils/formatters';
import '../styles/Map.css';

// Fix Leaflet icon issue
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon issue that often causes markers not to display
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Component to recenter the map when the selected earthquake changes
const MapController = ({ selectedEarthquake }) => {
  const map = useMap();
  
  useEffect(() => {
    if (selectedEarthquake) {
      map.setView(
        [selectedEarthquake.coordinates.latitude, selectedEarthquake.coordinates.longitude],
        6,
        { animate: true }
      );
    }
    
    // This is critical - force a resize on component mount and when the window resizes
    const handleResize = () => {
      map.invalidateSize();
    };
    
    // Trigger resize right away
    setTimeout(handleResize, 0);
    setTimeout(handleResize, 100);  // Do it again after a short delay
    setTimeout(handleResize, 500);  // And once more after a longer delay
    
    // Add resize handler
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedEarthquake, map]);
  
  return null;
};

const Map = ({ earthquakes, selectedEarthquake, onSelectEarthquake }) => {
  return (
    <div className="map-container">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        maxBounds={[[-90, -180], [90, 180]]}
        scrollWheelZoom={true}
        className="map"
        dragging={true}
        tap={L.Browser.mobile}
        tapTolerance={15}
        style={{ height: '100%', width: '100%' }} // Direct inline style
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {earthquakes.map(earthquake => (
          <CircleMarker
            key={earthquake.id}
            center={[earthquake.coordinates.latitude, earthquake.coordinates.longitude]}
            radius={getCircleRadius(earthquake.magnitude)}
            pathOptions={{
              fillColor: getMagnitudeColor(earthquake.magnitude),
              color: selectedEarthquake?.id === earthquake.id ? '#000000' : getMagnitudeColor(earthquake.magnitude),
              weight: selectedEarthquake?.id === earthquake.id ? 3 : 1,
              fillOpacity: 0.7
            }}
            eventHandlers={{
              click: () => onSelectEarthquake(earthquake)
            }}
          >
            <Popup>
              <div className="popup-content">
                <h3>{earthquake.title}</h3>
                <p>Magnitude: <strong>{formatMagnitude(earthquake.magnitude)}</strong></p>
                <p>Depth: <strong>{earthquake.coordinates.depth} km</strong></p>
                <p>Time: <strong>{formatDate(earthquake.time)}</strong></p>
                {earthquake.tsunami === 1 && (
                  <p className="tsunami-warning">Tsunami Warning Issued</p>
                )}
                <a 
                  href={earthquake.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="details-link"
                >
                  View Details on USGS
                </a>
              </div>
            </Popup>
          </CircleMarker>
        ))}
        
        <MapController selectedEarthquake={selectedEarthquake} />
      </MapContainer>
      
      <div className="legend">
        <h4>Magnitude Scale</h4>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#93C572' }}></span>
          <span>Below 2.0</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#FFD700' }}></span>
          <span>2.0 - 3.9</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#FFA500' }}></span>
          <span>4.0 - 5.9</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#FF4500' }}></span>
          <span>6.0 - 7.9</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#8B0000' }}></span>
          <span>8.0+</span>
        </div>
      </div>
    </div>
  );
};

export default Map;