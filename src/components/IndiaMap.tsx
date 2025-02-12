
import { useState } from 'react';

const IndiaMap = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (stateName: string) => {
    setSelectedState(stateName);
  };

  return (
    <div className="relative w-full h-full">
      {selectedState && (
        <div className="absolute top-2 left-2 bg-white p-2 rounded shadow z-10">
          Selected: {selectedState}
        </div>
      )}
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src="/lovable-uploads/c4a6ecac-888c-4f7b-a0ab-31a6727e8eba.png" 
          alt="Map of India"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default IndiaMap;
