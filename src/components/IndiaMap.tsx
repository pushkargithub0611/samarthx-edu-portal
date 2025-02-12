
import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 20.5937,
  lng: 78.9629  // Center of India
};

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

const IndiaMap = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (stateName: string) => {
    setSelectedState(stateName);
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
          zoom={5}
          options={options}
        />
      </LoadScript>
    </div>
  );
};

export default IndiaMap;
