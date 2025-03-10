
import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const GalleryItem = ({
  id,
  title,
  description,
  image,
  category
}: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div
        className="group h-72 overflow-hidden rounded-lg relative cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-lotr-dark to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        
        <div className="absolute left-0 bottom-0 w-full p-4">
          <div className="space-y-1 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
            <span className="inline-block px-2 py-1 bg-lotr-gold/80 text-lotr-dark text-xs font-medium rounded-sm mb-2">
              {category}
            </span>
            <h3 className="text-white text-lg font-cinzel font-semibold">{title}</h3>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-lotr-dark/95 rounded-lg shadow-xl overflow-hidden animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-lotr-dark/80 rounded-full p-1 text-white/80 hover:text-white z-10 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 h-72 md:h-auto overflow-hidden">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              
              <div className="md:w-1/3 p-6 flex flex-col">
                <span className="px-2 py-1 bg-lotr-gold/80 text-lotr-dark text-xs font-medium rounded-sm w-fit mb-3">
                  {category}
                </span>
                
                <h3 className="text-2xl font-cinzel text-lotr-gold mb-4">{title}</h3>
                
                <p className="text-white/80 text-sm leading-relaxed flex-grow">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;
