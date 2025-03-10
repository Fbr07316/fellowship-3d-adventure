
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Fallback image if the character image fails to load
  const fallbackImage = 'https://cdn.pixabay.com/photo/2016/09/28/02/14/medieval-1699357_1280.jpg';

  return (
    <div
      className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-soft group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Character Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {!imageLoaded && !imageError && (
          <div className="w-full h-full flex items-center justify-center bg-lotr-dark/50">
            <div className="w-12 h-12 border-4 border-lotr-gold/30 border-t-lotr-gold rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={imageError ? fallbackImage : image}
          alt={name}
          className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
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
