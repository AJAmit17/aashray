// "use client";

// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import type { Map as LeafletMap } from "leaflet";

// const Map = () => {
//   const [map, setMap] = useState<LeafletMap | null>(null);
  
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const L = require("leaflet");
//       const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
      
//       const position: [number, number] = [51.505, -0.09];
      
//       const MapComponent = () => (
//         <MapContainer
//           center={position}
//           zoom={11}
//           scrollWheelZoom={true}
//           style={{ height: "400px", width: "600px" }}
//           whenCreated={setMap}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={position}>
//             <Popup>
//               A sample marker
//             </Popup>
//           </Marker>
//         </MapContainer>
//       );
      
//       return MapComponent;
//     }
//     return null;
//   }, []);

//   return <div id="map">{map}</div>;
// };

// export default Map;