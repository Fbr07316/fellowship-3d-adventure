
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import GalleryItem from '../components/GalleryItem';
import PageTransition from '../components/PageTransition';

// Gallery items data
const galleryItems = [
  {
    id: 'fellowship',
    title: 'The Fellowship',
    description: 'The nine companions chosen to bear the fate of Middle-earth: Frodo, Sam, Merry, Pippin, Gandalf, Aragorn, Legolas, Gimli, and Boromir.',
    image: '/images/fellowship.jpg',
    category: 'Characters'
  },
  {
    id: 'ring',
    title: 'The One Ring',
    description: 'Forged by Sauron in the fires of Mount Doom, the One Ring grants invisibility but corrupts its bearer, seeking to return to its master.',
    image: '/images/one-ring.jpg',
    category: 'Objects'
  },
  {
    id: 'shire',
    title: 'The Shire',
    description: 'The peaceful homeland of the Hobbits in northwestern Middle-earth, known for its rolling hills, meadows, and cozy underground homes.',
    image: '/images/shire.jpg',
    category: 'Locations'
  },
  {
    id: 'rivendell',
    title: 'Rivendell',
    description: 'The Last Homely House East of the Sea, an Elven refuge hidden in a deep valley near the edge of the Misty Mountains.',
    image: '/images/rivendell.jpg',
    category: 'Locations'
  },
  {
    id: 'minas-tirith',
    title: 'Minas Tirith',
    description: 'The great fortified city and capital of Gondor, built on seven levels into the hillside of Mount Mindolluin.',
    image: '/images/minas-tirith.jpg',
    category: 'Locations'
  },
  {
    id: 'helm',
    title: 'Battle of Helm\'s Deep',
    description: 'The epic battle where the outnumbered forces of Rohan defended the fortress of the Hornburg against Saruman\'s army of Uruk-hai.',
    image: '/images/helms-deep-battle.jpg',
    category: 'Battles'
  },
  {
    id: 'pelennor',
    title: 'Battle of Pelennor Fields',
    description: 'The largest battle of the War of the Ring, where the armies of Gondor and Rohan defended Minas Tirith against the forces of Mordor.',
    image: '/images/pelennor-battle.jpg',
    category: 'Battles'
  },
  {
    id: 'rohan-riders',
    title: 'Riders of Rohan',
    description: 'The skilled horsemen of Rohan, known as the Rohirrim, who played a crucial role in the War of the Ring.',
    image: '/images/rohan-riders.jpg',
    category: 'Characters'
  },
  {
    id: 'nazgul',
    title: 'The Nazgûl',
    description: 'The nine Ringwraiths, once great kings of Men who were corrupted by the Nine Rings and became servants of Sauron.',
    image: '/images/nazgul.jpg',
    category: 'Characters'
  },
  {
    id: 'gandalf-balrog',
    title: 'Gandalf vs. Balrog',
    description: 'The legendary confrontation between Gandalf the Grey and the Balrog of Morgoth on the Bridge of Khazad-dûm in Moria.',
    image: '/images/gandalf-balrog.jpg',
    category: 'Battles'
  },
  {
    id: 'lothlorien',
    title: 'Lothlórien',
    description: 'The golden forest realm of the Galadhrim Elves, ruled by Lady Galadriel and Lord Celeborn.',
    image: '/images/lothlorien.jpg',
    category: 'Locations'
  },
  {
    id: 'sting',
    title: 'Sting',
    description: 'The Elven dagger carried by Bilbo and later given to Frodo, which glows blue when orcs are nearby.',
    image: '/images/sting.jpg',
    category: 'Objects'
  },
  {
    id: 'evenstar',
    title: 'The Evenstar',
    description: 'The pendant given by Arwen to Aragorn as a symbol of her love and her choice to become mortal.',
    image: '/images/evenstar.jpg',
    category: 'Objects'
  },
  {
    id: 'grey-havens',
    title: 'The Grey Havens',
    description: 'The port from which the Elves and Ring-bearers departed Middle-earth for the Undying Lands.',
    image: '/images/grey-havens-scene.jpg',
    category: 'Locations'
  },
  {
    id: 'mount-doom',
    title: 'Mount Doom',
    description: 'The volcano in Mordor where the One Ring was forged and the only place it could be destroyed.',
    image: '/images/mount-doom-scene.jpg',
    category: 'Locations'
  },
  {
    id: 'coronation',
    title: 'Aragorn\'s Coronation',
    description: 'The crowning of Aragorn as King Elessar of the Reunited Kingdom of Arnor and Gondor after the War of the Ring.',
    image: '/images/coronation-scene.jpg',
    category: 'Events'
  }
];

const categories = ['All', 'Characters', 'Locations', 'Objects', 'Battles', 'Events'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (selectedCategory === 'All') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-12 px-4 bg-lotr-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/gallery-bg.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-lotr-dark/70 to-lotr-dark/90"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cinzel mb-6 text-lotr-gold">
                Gallery
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Discover the iconic scenes and moments from Middle-earth
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 px-4 bg-lotr-dark/5">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-lotr-gold text-lotr-dark shadow-soft' 
                      : 'bg-card hover:bg-lotr-gold/20 text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map(item => (
                <GalleryItem 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  category={item.category}
                />
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No gallery items found matching this category.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-lotr-dark text-white py-10 px-4 mt-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="text-2xl font-cinzel font-bold text-lotr-gold">
                  Middle-earth
                </span>
                <p className="text-white/60 text-sm mt-2">
                  A journey through Tolkien's legendary world
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <a href="/" className="text-white/80 hover:text-lotr-gold transition-colors text-sm">Home</a>
                <a href="/characters" className="text-white/80 hover:text-lotr-gold transition-colors text-sm">Characters</a>
                <a href="/map" className="text-white/80 hover:text-lotr-gold transition-colors text-sm">Map</a>
                <a href="/timeline" className="text-white/80 hover:text-lotr-gold transition-colors text-sm">Timeline</a>
                <a href="/gallery" className="text-white/80 hover:text-lotr-gold transition-colors text-sm">Gallery</a>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/60 text-xs">
              <p>Created with love for Middle-earth fans everywhere.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Gallery;
