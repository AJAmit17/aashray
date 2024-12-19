"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [disasters, setDisasters] = useState([]);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    // Fetch disasters from API
    fetch('/api/disasters')
      .then(res => res.json())
      .then(data => setDisasters(data))
      .catch(error => console.error('Error fetching disasters:', error));

      fetch('/api/resources')
      .then(res => res.json())
      .then(data => setResource(data))
      .catch(error => console.error('Error fetching disasters:', error));
  }, []);

  useEffect(() => {
    if (!disasters.length && !resource.length) return;

    const L = require('leaflet');
    
    const map = L.map('map').setView([20.5937, 78.9629], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Create custom icons
    const disasterIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const resourceIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add markers for each disaster
    disasters.forEach(disaster => {
      const location = disaster.location;
      L.marker(location, { icon: disasterIcon })
        .bindPopup(`<b>${disaster.type}</b><br>${disaster.description}`)
        .addTo(map);
    });

    // Add markers for each resource
    resource.forEach(res => {
      const location = [res.location.latitude, res.location.longitude];
      L.marker(location, { icon: resourceIcon })
        .bindPopup(`
          <b>${res.name}</b><br>
          Type: ${res.type}<br>
          Status: ${res.status}<br>
          Quantity: ${res.quantity}<br>
          ${res.description}
        `)
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [disasters, resource]);

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