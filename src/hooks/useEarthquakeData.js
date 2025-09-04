import { useState, useEffect } from 'react';
import axios from 'axios';

const USGS_API_BASE = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary';

const getApiEndpoint = (timeRange) => {
  switch (timeRange) {
    case '1h':
      return `${USGS_API_BASE}/all_hour.geojson`;
    case '24h':
      return `${USGS_API_BASE}/all_day.geojson`;
    case '7d':
      return `${USGS_API_BASE}/all_week.geojson`;
    case '30d':
      return `${USGS_API_BASE}/all_month.geojson`;
    default:
      return `${USGS_API_BASE}/all_day.geojson`;
  }
};

const useEarthquakeData = (filters) => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const apiEndpoint = getApiEndpoint(filters.timeRange);
        const response = await axios.get(apiEndpoint);
        
        if (response.data && response.data.features) {
          // Transform the GeoJSON data into a more usable format
          let transformedData = response.data.features.map(feature => ({
            id: feature.id,
            title: feature.properties.title,
            magnitude: feature.properties.mag,
            place: feature.properties.place,
            time: feature.properties.time,
            url: feature.properties.url,
            felt: feature.properties.felt,
            tsunami: feature.properties.tsunami,
            alert: feature.properties.alert,
            coordinates: {
              longitude: feature.geometry.coordinates[0],
              latitude: feature.geometry.coordinates[1],
              depth: feature.geometry.coordinates[2]
            }
          }));
          
          // Filter by magnitude
          if (filters.magnitude > 0) {
            transformedData = transformedData.filter(eq => eq.magnitude >= filters.magnitude);
          }
          
          // Sort the data
          transformedData.sort((a, b) => {
            const aValue = filters.sortBy === 'time' ? a.time : a.magnitude;
            const bValue = filters.sortBy === 'time' ? b.time : b.magnitude;
            
            return filters.sortOrder === 'desc' 
              ? bValue - aValue 
              : aValue - bValue;
          });
          
          setEarthquakes(transformedData);
        } else {
          setError('Invalid data format received from the API');
        }
      } catch (error) {
        console.error('Error fetching earthquake data:', error);
        setError('Failed to fetch earthquake data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return { earthquakes, loading, error };
};

export default useEarthquakeData;