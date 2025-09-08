# Earthquake Visualizer 🌍

## Live Demo

[earthquakeviz.netlify.app](#)

## Project Overview

As a geography enthusiast, I wanted a simple yet powerful way to visualize earthquake data from around the globe. Many existing tools felt cluttered, outdated, or lacked real-time interactivity. This project brings a clean, intuitive web application that helps users explore earthquakes by location, magnitude, and time.

## Key Features

* **Real-Time Data:** Fetches live earthquake information from the USGS API.
* **Interactive Map:** Explore seismic activity on a dynamic map with clickable markers.
* **Filters & Sorting:** Adjust by magnitude, time range, and sort by latest or strongest events.
* **Responsive Design:** Optimized for desktop, tablet, and mobile.
* **Dark Mode:** Comfortable viewing in any environment.
* **Visual Cues:** Color-coded magnitudes and scaled markers for instant comprehension.
* **Detailed Info:** Includes depth, location, time, and tsunami warnings.

## Tech Stack

* **Frontend:** React.js (functional components + hooks)
* **Mapping:** Leaflet.js + React-Leaflet
* **State Management:** React Context API
* **Styling:** CSS variables for themes and responsive design
* **API Integration:** Custom hooks to fetch and transform earthquake data

## Challenges & Solutions

* **Map Container Sizing:** Used dual-layout and resize observers to ensure full height rendering on all devices.
* **Cross-Device Compatibility:** Mobile-first design with media queries and dynamic layouts.
* **Dark Mode:** CSS variable system + map filters for smooth theme switching.
* **List Scrolling:** Fixed-height scrollable container with custom styling to prevent excessive scrolling.

## Future Enhancements

* Heatmap visualizations for seismic patterns
* Historical data comparisons
* Fault line overlays
* Saved filters and favorites
* Notifications for significant events
* Offline mode for field research

## Getting Started

**Prerequisites:** Node.js v14+, npm or yarn

```bash
git clone https://github.com/yourusername/earthquake-visualizer.git
cd earthquake-visualizer
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

**Created by Shivesh Mishra | © 2025**

*Acknowledgements:* USGS API, Leaflet.js, OpenStreetMap, React.js
