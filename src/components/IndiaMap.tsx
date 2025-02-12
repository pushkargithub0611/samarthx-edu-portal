
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
          d="M180 220 L230 220 L250 240 L220 270 L180 250 Z"
          fill={selectedState === 'Maharashtra' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Maharashtra')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Karnataka */}
        <path
          d="M180 250 L220 270 L200 300 L170 280 Z"
          fill={selectedState === 'Karnataka' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Karnataka')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Gujarat */}
        <path
          d="M120 180 L160 180 L170 200 L140 220 L120 200 Z"
          fill={selectedState === 'Gujarat' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Gujarat')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Rajasthan */}
        <path
          d="M100 150 L170 150 L180 180 L120 180 L100 170 Z"
          fill={selectedState === 'Rajasthan' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Rajasthan')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Madhya Pradesh */}
        <path
          d="M160 180 L220 180 L230 220 L180 220 L170 200 Z"
          fill={selectedState === 'Madhya Pradesh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Madhya Pradesh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Uttar Pradesh */}
        <path
          d="M170 150 L240 150 L250 180 L220 180 L180 180 Z"
          fill={selectedState === 'Uttar Pradesh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Uttar Pradesh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Bihar */}
        <path
          d="M240 150 L270 150 L280 170 L260 180 L250 180 Z"
          fill={selectedState === 'Bihar' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Bihar')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* West Bengal */}
        <path
          d="M270 150 L290 160 L285 190 L270 180 L280 170 Z"
          fill={selectedState === 'West Bengal' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('West Bengal')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Tamil Nadu */}
        <path
          d="M200 300 L220 310 L210 340 L190 330 Z"
          fill={selectedState === 'Tamil Nadu' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Tamil Nadu')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Kerala */}
        <path
          d="M190 330 L210 340 L200 360 L180 350 Z"
          fill={selectedState === 'Kerala' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Kerala')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Andhra Pradesh */}
        <path
          d="M220 270 L260 270 L250 300 L220 310 L200 300 Z"
          fill={selectedState === 'Andhra Pradesh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Andhra Pradesh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Telangana */}
        <path
          d="M220 240 L250 240 L260 270 L220 270 Z"
          fill={selectedState === 'Telangana' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Telangana')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Odisha */}
        <path
          d="M260 180 L290 190 L280 220 L250 210 Z"
          fill={selectedState === 'Odisha' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Odisha')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Chhattisgarh */}
        <path
          d="M230 220 L260 210 L280 220 L250 240 Z"
          fill={selectedState === 'Chhattisgarh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Chhattisgarh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Punjab */}
        <path
          d="M100 120 L130 120 L140 140 L120 150 L100 150 Z"
          fill={selectedState === 'Punjab' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Punjab')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
        
        {/* Haryana */}
        <path
          d="M130 120 L160 120 L170 150 L140 140 Z"
          fill={selectedState === 'Haryana' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Haryana')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
      </svg>
    </div>
  );
};

export default IndiaMap;
