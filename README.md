Earthquake Visualizer
![Earthquake Visualizer](https://via.placeholder.com/1200x600?text=Earthquake+Visualizer)

🌐 Live Demo
Explore the Earthquake Visualizer

📋 Problem Statement
As a geography student, I needed an interactive tool to visualize earthquake data from around the world. Existing tools either had complex interfaces, lacked real-time data, or didn't provide intuitive filtering capabilities. The goal was to create a web application that:

Displays real-time earthquake data on an interactive map
Allows filtering by magnitude, time range, and other parameters
Provides detailed information about each earthquake
Works seamlessly across desktop and mobile devices
Has a clean, user-friendly interface with dark mode support
Visualizes data patterns through heatmaps
🛠️ Approach
Data Source
The application uses the USGS Earthquake API to fetch real-time earthquake data. This provides access to comprehensive data about seismic events worldwide, including magnitude, location, depth, and tsunami warnings.

Technology Stack
Frontend: React.js with functional components and hooks
Mapping: Leaflet.js for interactive maps with React-Leaflet integration
State Management: React's Context API and useState/useEffect hooks
Styling: CSS with variables for theming
API Integration: Custom hook for data fetching and transformation
Responsive Design: Mobile-first approach with media queries
Core Features
Interactive Map
Displays earthquakes as circular markers with size and color representing magnitude
Clickable markers that show detailed information in popups
Automatic map centering when selecting earthquakes from the list
Legend explaining the magnitude color scale
Filtering Capabilities
Minimum magnitude slider
Time range selection (past hour, 24 hours, 7 days, 30 days)
Sorting options by time or magnitude
Sort order toggle (ascending/descending)
Earthquake List
Scrollable list synchronized with map data
Visual indicators for magnitude and tsunami warnings
Clear highlighting of selected earthquakes
Theme Support
Light and dark mode for comfortable viewing in any environment
Automatic map style adjustment based on theme
Smooth transitions between themes
Responsive Design
Desktop view: Side-by-side layout with map and controls
Mobile/tablet view: Stacked layout with optimized dimensions
Adjustable components based on screen size
🔍 Implementation Challenges & Solutions
Challenge 1: Map Container Sizing
Problem: The map container wasn't taking up the full available height on laptop/desktop devices, leading to unused space and poor user experience.

Solution: Implemented a dual-layout approach that uses position absolute for the map container on desktop while maintaining a more flexible layout for mobile devices. Added resize observers and invalidation calls to ensure the map properly renders at all times.

Challenge 2: Cross-Device Compatibility
Problem: Creating a layout that works well on both large desktop screens and small mobile devices proved challenging.

Solution: Developed a responsive design system with:

Dynamic layout switching based on screen width
Percentage-based heights for mobile views
Fixed dimensions for desktop views
Component-specific media queries for fine-tuning
Challenge 3: Dark Mode Implementation
Problem: Implementing dark mode while maintaining readability, especially for the map which comes with its own styling.

Solution:

Created a CSS variables system for consistent theming
Applied CSS filters to the map to invert colors appropriately
Ensured sufficient contrast for all text elements
Added transition effects for smooth theme switching
Challenge 4: List Scrolling Behavior
Problem: The earthquake list would expand to show all items, making the page too tall and requiring excessive scrolling.

Solution: Implemented a fixed-height scrollable container for the earthquake list, with custom scrollbar styling that adapts to the selected theme.

📱 Features
Real-time Earthquake Data: Shows the latest earthquake information from around the world
Interactive Map: Explore earthquakes geographically with an intuitive interface
Detailed Information: View magnitude, location, depth, time, and tsunami warnings
Flexible Filtering: Filter earthquakes by magnitude, time range, and more
Sorting Options: Sort by time or magnitude in ascending or descending order
Responsive Design: Works seamlessly on desktop, tablet, and mobile devices
Dark Mode: Toggle between light and dark themes for comfortable viewing
Visual Indicators: Color-coded magnitudes and size-scaled markers for quick understanding
Performance Optimized: Fast loading and smooth interactions even with large datasets
🔮 Future Enhancements
Heatmap visualization mode for identifying seismic activity patterns
Historical data comparison tools
Fault line overlays for geological context
Saved filters and favorite locations
Notifications for significant earthquakes
Offline support for field research
Additional data visualization charts and statistics
Custom map styles and base layers
🚀 Getting Started
Prerequisites
Node.js (v14.0 or higher)
npm or yarn
Installation
Clone the repository:
bash
git clone https://github.com/yourusername/earthquake-visualizer.git
cd earthquake-visualizer
Install dependencies:
bash
npm install
# or
yarn install
Start the development server:
bash
npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgements
USGS Earthquake API for providing the earthquake data
Leaflet.js for the interactive mapping capabilities
React.js for the frontend framework
OpenStreetMap for map tiles
Created by Shivesh Mishra | © 2025
