import React from 'react';
import '../styles/FilterPanel.css';

const FilterPanel = ({ filters, onFilterChange }) => {
  const handleMagnitudeChange = (event) => {
    onFilterChange({ magnitude: parseFloat(event.target.value) });
  };

  const handleTimeRangeChange = (event) => {
    onFilterChange({ timeRange: event.target.value });
  };

  const handleSortByChange = (event) => {
    onFilterChange({ sortBy: event.target.value });
  };

  const handleSortOrderChange = (event) => {
    onFilterChange({ sortOrder: event.target.value });
  };

  return (
    <div className="filter-panel">
      <h2>Filters</h2>
      
      <div className="filter-group">
        <label htmlFor="magnitude">Minimum Magnitude:</label>
        <div className="range-container">
          <input
            type="range"
            id="magnitude"
            min="0"
            max="9"
            step="0.5"
            value={filters.magnitude}
            onChange={handleMagnitudeChange}
          />
          <span className="range-value">{filters.magnitude}</span>
        </div>
      </div>
      
      <div className="filter-group">
        <label htmlFor="timeRange">Time Range:</label>
        <select
          id="timeRange"
          value={filters.timeRange}
          onChange={handleTimeRangeChange}
        >
          <option value="1h">Past Hour</option>
          <option value="24h">Past 24 Hours</option>
          <option value="7d">Past 7 Days</option>
          <option value="30d">Past 30 Days</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="sortBy">Sort By:</label>
        <select
          id="sortBy"
          value={filters.sortBy}
          onChange={handleSortByChange}
        >
          <option value="time">Time</option>
          <option value="magnitude">Magnitude</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="sortOrder">Sort Order:</label>
        <select
          id="sortOrder"
          value={filters.sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="desc">Newest/Largest First</option>
          <option value="asc">Oldest/Smallest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;