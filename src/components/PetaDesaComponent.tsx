import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icon custom untuk marker di peta
const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface PetaDesaProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const PetaDesaComponent: React.FC<PetaDesaProps> = ({ lat, lng, zoom = 13 }) => {
  return (
    <div className="relative w-full h-96 px-4 py-6 lg:px-16 lg:py-10">
      <MapContainer center={[lat, lng]} zoom={zoom} className="w-full h-full rounded-lg shadow-lg">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={markerIcon}>
          <Popup>Desa Mentuda</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PetaDesaComponent;
