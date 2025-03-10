
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MapLocation from '../components/MapLocation';
import PageTransition from '../components/PageTransition';
import { Search } from 'lucide-react';

// Map location data
const locations = [
  {
    id: 'mordor',
    name: 'Mordor',
    description: 'The dark realm of Sauron, surrounded by mountains and home to Mount Doom where the One Ring was forged and ultimately destroyed.',
    xPosition: 75,
    yPosition: 60,
    importance: 'major' as const
  },
  {
    id: 'minas-tirith',
    name: 'Minas Tirith',
    description: 'The great fortified city and capital of Gondor, built on seven levels into the side of a mountain.',
    xPosition: 62,
    yPosition: 58,
    importance: 'major' as const
  },
  {
    id: 'rivendell',
    name: 'Rivendell',
    description: 'An Elven outpost in Middle-earth and the house of Elrond, where the Council of Elrond took place to decide the fate of the One Ring.',
    xPosition: 42,
    yPosition: 40,
    importance: 'major' as const
  },
  {
    id: 'shire',
    name: 'The Shire',
    description: 'Homeland of the Hobbits, known for its peaceful, rural landscape and the village of Hobbiton.',
    xPosition: 32,
    yPosition: 42,
    importance: 'major' as const
  },
  {
    id: 'lothlorien',
    name: 'Lothlorien',
    description: 'The golden forest realm of the Elves, ruled by Galadriel and Celeborn.',
    xPosition: 50,
    yPosition: 48,
    importance: 'major' as const
  },
  {
    id: 'isengard',
    name: 'Isengard',
    description: 'A fortress ruled by the wizard Saruman, featuring the tower of Orthanc.',
    xPosition: 48,
    yPosition: 52,
    importance: 'major' as const
  },
  {
    id: 'helms-deep',
    name: 'Helm\'s Deep',
    description: 'A fortress in Rohan where its people took refuge during the War of the Ring.',
    xPosition: 52,
    yPosition: 55,
    importance: 'minor' as const
  },
  {
    id: 'rohan',
    name: 'Rohan',
    description: 'The kingdom of the horse-lords, known for its vast plains and skilled riders.',
    xPosition: 55,
    yPosition: 48,
    importance: 'major' as const
  },
  {
    id: 'moria',
    name: 'Moria',
    description: 'An ancient Dwarven kingdom beneath the Misty Mountains, also known as Khazad-dûm.',
    xPosition: 48,
    yPosition: 45,
    importance: 'major' as const
  },
  {
    id: 'erebor',
    name: 'Erebor',
    description: 'The Lonely Mountain, home to a Dwarven kingdom and once occupied by the dragon Smaug.',
    xPosition: 68,
    yPosition: 30,
    importance: 'minor' as const
  },
  {
    id: 'dale',
    name: 'Dale',
    description: 'A city of Men located near Erebor, destroyed by Smaug and later rebuilt.',
    xPosition: 66,
    yPosition: 27,
    importance: 'minor' as const
  },
  {
    id: 'weathertop',
    name: 'Weathertop',
    description: 'The ruins of the watchtower of Amon Sûl, where Frodo was wounded by a Nazgûl.',
    xPosition: 38,
    yPosition: 45,
    importance: 'minor' as const
  },
  {
    id: 'bree',
    name: 'Bree',
    description: 'A village of Men and Hobbits, home to The Prancing Pony inn where the hobbits first met Aragorn.',
    xPosition: 35,
    yPosition: 44,
    importance: 'minor' as const
  },
  {
    id: 'osgiliath',
    name: 'Osgiliath',
    description: 'A ruined city that once served as the capital of Gondor, strategically located between Minas Tirith and Minas Morgul.',
    xPosition: 65,
    yPosition: 59,
    importance: 'minor' as const
  },
  {
    id: 'mount-doom',
    name: 'Mount Doom',
    description: 'The volcano in Mordor where the One Ring was forged and the only place it could be destroyed.',
    xPosition: 78,
    yPosition: 62,
    importance: 'major' as const
  }
];

const Map = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(locations);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredLocations(locations);
    } else {
      setFilteredLocations(
        locations.filter(location =>
          location.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);
  
  const handleLocationClick = (id: string) => {
    setActiveLocation(prevId => prevId === id ? null : id);
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-6 px-4 bg-lotr-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/map-bg.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-lotr-dark/70 to-lotr-dark/90"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cinzel mb-6 text-lotr-gold">
                Middle-earth Map
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Explore the lands and locations of Tolkien's legendary world
              </p>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={18} className="text-muted-foreground" />
                </div>
                <input
                  type="text"
                  className="bg-card w-full py-3 pl-10 pr-4 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-lotr-gold/50"
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Interactive Map */}
            <div className="relative w-full aspect-[1.5/1] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-soft border border-border bg-map-texture bg-cover">
              {/* Map Base Image */}
              <img
                src="/images/middle-earth-map.jpg"
                alt="Map of Middle-earth"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              {/* Map Locations */}
              {filteredLocations.map((location) => (
                <MapLocation
                  key={location.id}
                  id={location.id}
                  name={location.name}
                  description={location.description}
                  xPosition={location.xPosition}
                  yPosition={location.yPosition}
                  importance={location.importance}
                  onClick={handleLocationClick}
                  isActive={activeLocation === location.id}
                />
              ))}
              
              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-lotr-dark/90 backdrop-blur-sm p-3 rounded-lg shadow-soft text-white">
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="w-3 h-3 rounded-full bg-lotr-gold"></span>
                  <span>Major Location</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-lotr-gold/80"></span>
                  <span>Minor Location</span>
                </div>
              </div>
            </div>
            
            {/* Location List for Mobile */}
            <div className="mt-12 md:hidden">
              <h3 className="text-xl font-cinzel text-center mb-6">All Locations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className="bg-card p-4 rounded-lg border border-border shadow-soft hover:border-lotr-gold/50 transition-all duration-300"
                    onClick={() => handleLocationClick(location.id)}
                  >
                    <h4 className="font-cinzel text-lg text-lotr-gold mb-2">{location.name}</h4>
                    <p className="text-foreground/70 text-sm line-clamp-2">{location.description}</p>
                  </div>
                ))}
              </div>
            </div>
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

export default Map;
