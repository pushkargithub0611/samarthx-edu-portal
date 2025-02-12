
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const stateCoordinates: { [key: string]: { lat: number; lng: number } } = {
  Maharashtra: { lat: 19.7515, lng: 75.7139 },
  Karnataka: { lat: 15.3173, lng: 75.7139 },
  Gujarat: { lat: 22.2587, lng: 71.1924 },
  Rajasthan: { lat: 27.0238, lng: 74.2179 },
  "Madhya Pradesh": { lat: 22.9734, lng: 78.6569 },
  "Uttar Pradesh": { lat: 26.8467, lng: 80.9462 },
  Bihar: { lat: 25.0961, lng: 85.3131 },
  "West Bengal": { lat: 22.9868, lng: 87.8550 },
  "Tamil Nadu": { lat: 11.1271, lng: 78.6569 },
  Kerala: { lat: 10.8505, lng: 76.2711 },
  "Andhra Pradesh": { lat: 15.9129, lng: 79.7400 },
  Telangana: { lat: 17.1231, lng: 79.2088 },
  Odisha: { lat: 20.9517, lng: 85.0985 },
  Chhattisgarh: { lat: 21.2787, lng: 81.8661 },
  Punjab: { lat: 31.1471, lng: 75.3412 },
  Haryana: { lat: 29.0588, lng: 76.0856 }
};

interface IndiaMapProps {
  onStateSelect: (state: string) => void;
  selectedState: string | null;
}

const IndiaMap = ({ onStateSelect, selectedState }: IndiaMapProps) => {
  const handleMarkerClick = (stateName: string) => {
    onStateSelect(stateName);
  };

  const center = selectedState && stateCoordinates[selectedState]
    ? stateCoordinates[selectedState]
    : { lat: 20.5937, lng: 78.9629 };

  const options = {
    restriction: {
      latLngBounds: {
        north: 37.0902,
        south: 8.4077,
        west: 68.1766,
        east: 97.4025,
      },
      strictBounds: true,
    },
    mapTypeControl: true,
    streetViewControl: false,
    fullscreenControl: true,
    zoomControl: true,
  };

  return (
    <div className="relative w-full h-full min-h-[400px]">
      {selectedState && (
        <div className="absolute top-2 left-2 bg-white p-2 rounded shadow z-10">
          Selected: {selectedState}
        </div>
      )}
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={selectedState ? 7 : 5}
          options={options}
        >
          {Object.entries(stateCoordinates).map(([stateName, coords]) => (
            <Marker
              key={stateName}
              position={coords}
              onClick={() => handleMarkerClick(stateName)}
              options={{
                icon: {
                  url: `data:image/svg+xml,${encodeURIComponent(`
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" fill="${selectedState === stateName ? '#F97316' : '#1e40af'}" 
                        stroke="white" stroke-width="2"/>
                    </svg>
                  `)}`
                }
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default IndiaMap;
