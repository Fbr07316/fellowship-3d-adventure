
import { useState } from 'react';

interface MapLocationProps {
  id: string;
  name: string;
  description: string;
  xPosition: number;
  yPosition: number;
  importance: 'major' | 'minor';
  onClick: (id: string) => void;
  isActive: boolean;
}

const MapLocation = ({
  id,
  name,
  description,
  xPosition,
  yPosition,
  importance,
  onClick,
  isActive
}: MapLocationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    onClick(id);
  };
  
  return (
    <div 
      className="absolute"
      style={{ 
        left: `${xPosition}%`, 
        top: `${yPosition}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <button
        className={`group relative flex items-center justify-center transition-all duration-300 ${
          isActive ? 'z-30' : 'z-20'
        }`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`View ${name}`}
      >
        {/* Location Marker */}
        <div className={`
          rounded-full transition-all duration-300
          ${importance === 'major' 
            ? 'w-4 h-4 bg-lotr-gold' 
            : 'w-3 h-3 bg-lotr-gold/80'
          }
          ${isActive || isHovered 
            ? 'shadow-gold transform scale-150' 
            : ''
          }
        `}>
          <span className={`
            absolute top-0 left-0 w-full h-full rounded-full animate-pulse-subtle
            ${importance === 'major' ? 'bg-lotr-gold/40' : 'bg-lotr-gold/20'}
          `}></span>
        </div>
        
        {/* Location Name (visible on hover) */}
        <span className={`
          absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 
          text-xs font-medium whitespace-nowrap bg-lotr-dark/90 text-white 
          rounded-md shadow-soft transition-all duration-300
          ${isHovered || isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}>
          {name}
        </span>
      </button>
      
      {/* Location Details (visible when active) */}
      {isActive && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 bg-lotr-dark/90 backdrop-blur-md p-4 rounded-lg shadow-soft z-40 animate-fade-in">
          <h3 className="text-lotr-gold font-cinzel text-lg mb-2">{name}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};

export default MapLocation;
