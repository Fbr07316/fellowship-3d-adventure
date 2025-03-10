
import { useState } from 'react';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  side: 'left' | 'right';
}

const TimelineEvent = ({
  year,
  title,
  description,
  image,
  side
}: TimelineEventProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className={`relative w-full md:w-1/2 mb-8 md:mb-0 ${
        side === 'right' ? 'md:ml-auto' : ''
      }`}
    >
      <div className={`
        flex flex-col md:items-${side === 'left' ? 'end' : 'start'}
        px-4 relative
      `}>
        {/* Timeline connector */}
        <div className="absolute top-0 bottom-0 md:inset-y-0 w-px bg-lotr-gold/30 md:mx-0 z-0
          left-8 md:left-auto
          ${side === 'left' ? 'md:right-0' : 'md:left-0'}
        "></div>
        
        {/* Event container */}
        <div className={`
          relative w-full md:w-[95%] bg-card/60 backdrop-blur-sm rounded-lg p-6 shadow-soft
          border border-white/10 hover-scale cursor-pointer
          ${side === 'left' ? 'md:mr-6' : 'md:ml-6'}
        `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Year badge */}
          <div className={`
            absolute top-6 bg-lotr-gold/90 text-lotr-dark font-medium px-3 py-1 
            rounded-full text-sm md:text-xs shadow-sm
            ${side === 'left' 
              ? '-right-3 md:right-auto md:-left-12' 
              : '-right-3 md:-right-12'
            }
          `}>
            {year}
          </div>
          
          {/* Connector dot */}
          <div className={`
            absolute top-6 w-4 h-4 rounded-full bg-lotr-gold shadow-gold z-10
            ${side === 'left' 
              ? 'left-[7px] md:left-auto md:right-[-8px]' 
              : 'left-[7px] md:left-[-8px]'
            }
          `}></div>
          
          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-cinzel text-lotr-gold">{title}</h3>
            
            {image && (
              <div className="overflow-hidden rounded-md mb-3">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-40 object-cover object-center hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            )}
            
            <p className={`text-foreground/80 text-sm transition-all duration-300 ${
              isExpanded ? 'line-clamp-none' : 'line-clamp-3'
            }`}>
              {description}
            </p>
            
            {description.length > 150 && (
              <button 
                className="text-lotr-gold text-sm hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
