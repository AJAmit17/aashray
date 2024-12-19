// "use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { Icon } from "leaflet";
// import { Resource } from "@prisma/client";

// const customIcon = new Icon({
//     iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
// });

// interface MapProps {
//     resources: any[];
// }

// export default function Map({ resources }: MapProps) {
//     return (
//         <MapContainer
//             center={[40.7128, -74.0060]}
//             zoom={13}
//             style={{ height: "100%", width: "100%" }}
//         >
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             {resources.map((resource) => (
//                 <Marker
//                     key={resource.id}
//                     position={[resource.location.latitude, resource.location.longitude]}
//                     icon={customIcon}
//                 >
//                     <Popup>
//                         <div className="p-2">
//                             <h3 className="font-semibold">{resource.name}</h3>
//                             <p className="text-sm text-muted-foreground">{resource.type}</p>
//                             <p className="text-sm">{resource.description}</p>
//                             <p className="text-sm font-medium mt-1">
//                                 Status: {resource.status.toLowerCase()}
//                             </p>
//                         </div>
//                     </Popup>
//                 </Marker>
//             ))}
//         </MapContainer>
//     );
// }