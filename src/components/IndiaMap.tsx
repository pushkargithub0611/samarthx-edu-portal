
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
        viewBox="0 0 600 600"
        className="w-full h-full"
      >
        {/* Jammu and Kashmir */}
        <path
          d="M250 50 L300 40 L320 70 L280 90 L250 80 Z"
          fill={selectedState === 'Jammu and Kashmir' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Jammu and Kashmir')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Himachal Pradesh */}
        <path
          d="M280 90 L310 85 L320 110 L290 120 L270 110 Z"
          fill={selectedState === 'Himachal Pradesh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Himachal Pradesh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Punjab */}
        <path
          d="M270 110 L290 120 L300 140 L280 150 L260 140 Z"
          fill={selectedState === 'Punjab' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Punjab')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Uttarakhand */}
        <path
          d="M320 110 L350 105 L360 130 L330 140 L320 130 Z"
          fill={selectedState === 'Uttarakhand' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Uttarakhand')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Haryana */}
        <path
          d="M280 150 L310 145 L320 170 L290 180 L270 170 Z"
          fill={selectedState === 'Haryana' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Haryana')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Rajasthan */}
        <path
          d="M220 170 L280 160 L290 200 L260 240 L200 220 Z"
          fill={selectedState === 'Rajasthan' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Rajasthan')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Gujarat */}
        <path
          d="M180 240 L220 230 L240 270 L200 320 L160 290 Z"
          fill={selectedState === 'Gujarat' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Gujarat')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Maharashtra */}
        <path
          d="M200 320 L280 310 L290 380 L240 390 L190 370 Z"
          fill={selectedState === 'Maharashtra' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Maharashtra')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Karnataka */}
        <path
          d="M240 390 L290 380 L280 450 L230 460 L210 430 Z"
          fill={selectedState === 'Karnataka' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Karnataka')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Kerala */}
        <path
          d="M230 460 L260 450 L250 510 L220 520 L210 490 Z"
          fill={selectedState === 'Kerala' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Kerala')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Tamil Nadu */}
        <path
          d="M260 450 L300 440 L310 500 L270 520 L250 510 Z"
          fill={selectedState === 'Tamil Nadu' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Tamil Nadu')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Andhra Pradesh */}
        <path
          d="M290 380 L350 360 L370 420 L300 440 L280 420 Z"
          fill={selectedState === 'Andhra Pradesh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Andhra Pradesh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Telangana */}
        <path
          d="M290 340 L350 330 L360 370 L320 380 L290 370 Z"
          fill={selectedState === 'Telangana' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Telangana')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Odisha */}
        <path
          d="M380 300 L440 290 L450 340 L410 360 L380 350 Z"
          fill={selectedState === 'Odisha' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Odisha')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Chhattisgarh */}
        <path
          d="M320 280 L380 270 L400 320 L360 340 L330 330 Z"
          fill={selectedState === 'Chhattisgarh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Chhattisgarh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Madhya Pradesh */}
        <path
          d="M260 240 L350 220 L380 270 L320 290 L280 280 Z"
          fill={selectedState === 'Madhya Pradesh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Madhya Pradesh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Uttar Pradesh */}
        <path
          d="M290 180 L380 160 L400 210 L350 230 L310 220 Z"
          fill={selectedState === 'Uttar Pradesh' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Uttar Pradesh')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* Bihar */}
        <path
          d="M400 210 L450 200 L460 240 L420 250 L400 240 Z"
          fill={selectedState === 'Bihar' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('Bihar')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />

        {/* West Bengal */}
        <path
          d="M450 200 L490 190 L500 250 L470 270 L460 240 Z"
          fill={selectedState === 'West Bengal' ? '#F97316' : '#E5E7EB'}
          stroke="#4B5563"
          strokeWidth="1"
          onClick={() => handleStateClick('West Bengal')}
          className="cursor-pointer hover:fill-orange-200 transition-colors"
        />
      </svg>
    </div>
  );
};

export default IndiaMap;
