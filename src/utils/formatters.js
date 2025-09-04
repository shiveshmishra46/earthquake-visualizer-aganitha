// Format date to a readable string
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

// Format magnitude to one decimal place
export const formatMagnitude = (magnitude) => {
  return parseFloat(magnitude).toFixed(1);
};

// Get color based on earthquake magnitude
export const getMagnitudeColor = (magnitude) => {
  if (magnitude < 2) return '#93C572'; // Light green
  if (magnitude < 4) return '#FFD700'; // Gold
  if (magnitude < 6) return '#FFA500'; // Orange
  if (magnitude < 8) return '#FF4500'; // Red-Orange
  return '#8B0000'; // Dark red
};

// Get radius based on earthquake magnitude
export const getCircleRadius = (magnitude) => {
  return Math.max(5, magnitude * 3);
};

// Get description of the alert level
export const getAlertDescription = (alert) => {
  switch (alert) {
    case 'green':
      return 'Minimal impact';
    case 'yellow':
      return 'Some impact';
    case 'orange':
      return 'Significant impact';
    case 'red':
      return 'Severe impact';
    default:
      return 'No alert information';
  }
};

// Format location name to be more readable
export const formatLocationName = (place) => {
  if (!place) return 'Unknown location';
  
  // Remove redundant parts
  return place.replace(/^(.*?)\s*of\s*(.*)$/, '$2');
};