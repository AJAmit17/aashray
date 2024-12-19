"use client";

import { useEffect } from 'react';
import Link from 'next/link';

// Sample disaster data
const disasters = [
  { id: 1, type: 'Flood', location: [22.5726, 88.3639], desc: 'Severe flooding in Kolkata' },
  { id: 2, type: 'Earthquake', location: [28.7041, 77.1025], desc: 'Earthquake in Delhi region' },
  { id: 3, type: 'Cyclone', location: [13.0827, 80.2707], desc: 'Cyclone warning in Chennai' },
  { id: 4, type: 'Landslide', location: [30.9010, 75.8573], desc: 'Landslide in Ludhiana' }
];

export default function Home() {
  useEffect(() => {
    const L = require('leaflet');
    
    const map = L.map('map').setView([20.5937, 78.9629], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Create custom icon
    const disasterIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add markers for each disaster
    disasters.forEach(disaster => {
      L.marker(disaster.location, { icon: disasterIcon })
        .bindPopup(`<b>${disaster.type}</b><br>${disaster.desc}`)
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <main>
      <Link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div 
        id="map" 
        style={{ height: '100vh', width: '100%' }}
      ></div>
    </main>
  );
}