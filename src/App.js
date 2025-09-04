import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import EarthquakeList from './components/EarthquakeList';
import FilterPanel from './components/FilterPanel';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import useEarthquakeData from './hooks/useEarthquakeData';
import './styles/App.css';

function App() {
  const [filters, setFilters] = useState({
    magnitude: 0,
    timeRange: '24h',
    sortBy: 'time',
    sortOrder: 'desc',
  });

  const [selectedEarthquake, setSelectedEarthquake] = useState(null);
  const { earthquakes, loading, error } = useEarthquakeData(filters);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Check for mobile/desktop on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleEarthquakeSelect = (earthquake) => {
    setSelectedEarthquake(earthquake);
  };

  return (
    <div className="app">
      <Header />
      {isMobile ? (
        // Mobile/Tablet Layout (stack vertically)
        <main className="app-content mobile">
          <div className="sidebar">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
            {loading ? (
              <LoadingSpinner />
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : (
              <EarthquakeList 
                earthquakes={earthquakes} 
                onSelectEarthquake={handleEarthquakeSelect}
                selectedEarthquake={selectedEarthquake}
              />
            )}
          </div>
          <div className="map-wrapper">
            <Map 
              earthquakes={earthquakes} 
              selectedEarthquake={selectedEarthquake}
              onSelectEarthquake={handleEarthquakeSelect}
            />
          </div>
        </main>
      ) : (
        // Desktop Layout (side by side)
        <main className="app-content desktop">
          <div className="sidebar">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
            {loading ? (
              <LoadingSpinner />
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : (
              <EarthquakeList 
                earthquakes={earthquakes} 
                onSelectEarthquake={handleEarthquakeSelect}
                selectedEarthquake={selectedEarthquake}
              />
            )}
          </div>
          <div className="map-wrapper">
            <Map 
              earthquakes={earthquakes} 
              selectedEarthquake={selectedEarthquake}
              onSelectEarthquake={handleEarthquakeSelect}
            />
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;