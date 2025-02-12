
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
      <svg
        viewBox="0 0 450 400"
        className="w-full h-full"
      >
        {/* Maharashtra */}
        <path
          d="M160 230 L200 230 L220 250 L190 280 L160 260 Z"
          fill={selectedState === 'Maharashtra' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Maharashtra')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        {/* Karnataka */}
        <path
          d="M160 260 L190 280 L180 310 L150 290 Z"
          fill={selectedState === 'Karnataka' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Karnataka')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        {/* Add more state paths here */}
      </svg>
    </div>
  );
};

export default IndiaMap;
