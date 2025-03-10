
import { useState } from 'react';

interface CharacterCardProps {
  id: string;
  name: string;
  race: string;
  image: string;
  description: string;
  quote?: string;
}

const CharacterCard = ({
  id,
  name,
  race,
  image,
  description,
  quote
}: CharacterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-soft group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Character Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lotr-dark via-lotr-dark/40 to-transparent" />
      </div>

      {/* Race Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-lotr-gold/80 text-lotr-dark backdrop-blur-sm">
          {race}
        </span>
      </div>

      {/* Character Info */}
      <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500 ease-out">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white font-cinzel">{name}</h3>
          
          <div className={`overflow-hidden transition-all duration-500 ease-out ${
            isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className="text-white/90 text-sm leading-relaxed mt-2">
              {description}
            </p>
            
            {quote && (
              <blockquote className="mt-4 border-l-2 border-lotr-gold pl-4 italic text-white/80 text-sm">
                "{quote}"
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
