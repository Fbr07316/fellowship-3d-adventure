
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CharacterCard from '../components/CharacterCard';
import PageTransition from '../components/PageTransition';

// Character data
const characters = [
  {
    id: 'frodo',
    name: 'Frodo Baggins',
    race: 'Hobbit',
    image: '/images/frodo.jpg',
    description: 'The Ring-bearer and protagonist of The Lord of the Rings, who undertakes the quest to destroy the One Ring in the fires of Mount Doom.',
    quote: 'I wish the Ring had never come to me. I wish none of this had happened.'
  },
  {
    id: 'gandalf',
    name: 'Gandalf',
    race: 'Maia',
    image: '/images/gandalf.jpg',
    description: 'A wizard and one of the Istari sent to Middle-earth to contest the will of Sauron. He guides and mentors Frodo on his quest.',
    quote: 'All we have to decide is what to do with the time that is given us.'
  },
  {
    id: 'aragorn',
    name: 'Aragorn',
    race: 'Human',
    image: '/images/aragorn.jpg',
    description: 'The heir of Isildur and rightful claimant to the thrones of Arnor and Gondor. He helps Frodo on his quest and eventually becomes King Elessar.',
    quote: 'I would have gone with you to the end, into the very fires of Mordor.'
  },
  {
    id: 'legolas',
    name: 'Legolas',
    race: 'Elf',
    image: '/images/legolas.jpg',
    description: 'A Sindarin Elf of the Woodland Realm and one of the nine members of the Fellowship of the Ring.',
    quote: 'They\'re taking the Hobbits to Isengard!'
  },
  {
    id: 'gimli',
    name: 'Gimli',
    race: 'Dwarf',
    image: '/images/gimli.jpg',
    description: 'Son of Glóin and a member of the Fellowship of the Ring. Despite initial mistrust, he forms a close friendship with Legolas.',
    quote: 'Nobody tosses a Dwarf!'
  },
  {
    id: 'samwise',
    name: 'Samwise Gamgee',
    race: 'Hobbit',
    image: '/images/sam.jpg',
    description: 'Frodo\'s loyal gardener who accompanies him on the quest to destroy the One Ring, eventually carrying him up Mount Doom.',
    quote: 'I can\'t carry it for you, but I can carry you!'
  },
  {
    id: 'galadriel',
    name: 'Galadriel',
    race: 'Elf',
    image: '/images/galadriel.jpg',
    description: 'The Lady of Lórien, one of the greatest of the Eldar in Middle-earth, and the bearer of Nenya, one of the three Elven Rings of Power.',
    quote: 'Even the smallest person can change the course of the future.'
  },
  {
    id: 'sauron',
    name: 'Sauron',
    race: 'Maia',
    image: '/images/sauron.jpg',
    description: 'The primary antagonist of The Lord of the Rings. Once a Maia of Aulë, he was corrupted by Melkor and forged the One Ring to dominate all life in Middle-earth.',
    quote: 'You cannot hide. I see you.'
  }
];

const races = ['All', 'Hobbit', 'Elf', 'Human', 'Dwarf', 'Maia'];

const Characters = () => {
  const [selectedRace, setSelectedRace] = useState('All');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (selectedRace === 'All') {
      setFilteredCharacters(characters);
    } else {
      setFilteredCharacters(characters.filter(char => char.race === selectedRace));
    }
  }, [selectedRace]);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-12 px-4 bg-lotr-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/characters-bg.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-lotr-dark/70 to-lotr-dark/90"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cinzel mb-6 text-lotr-gold">
                Characters
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Meet the heroes and villains who shaped the destiny of Middle-earth
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 px-4 bg-lotr-dark/5">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {races.map(race => (
                <button 
                  key={race}
                  onClick={() => setSelectedRace(race)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedRace === race 
                      ? 'bg-lotr-gold text-lotr-dark shadow-soft' 
                      : 'bg-card hover:bg-lotr-gold/20 text-foreground'
                  }`}
                >
                  {race}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Characters Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCharacters.map(character => (
                <CharacterCard 
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  race={character.race}
                  image={character.image}
                  description={character.description}
                  quote={character.quote}
                />
              ))}
            </div>
            
            {filteredCharacters.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No characters found matching this filter.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-lotr-dark text-white py-10 px-4">
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

export default Characters;
