
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TimelineEvent from '../components/TimelineEvent';
import PageTransition from '../components/PageTransition';

// Timeline events data
const timelineEvents = [
  {
    year: 'TA 2941',
    title: 'The Quest for Erebor',
    description: 'Bilbo Baggins joins Thorin and Company on their quest to reclaim the Lonely Mountain from the dragon Smaug. During this adventure, Bilbo finds the One Ring in Gollum\'s cave.',
    image: '/images/erebor.jpg',
    side: 'left' as const
  },
  {
    year: 'TA 3001',
    title: 'Bilbo\'s Farewell Party',
    description: 'Bilbo celebrates his 111th birthday and leaves the Shire, passing the Ring to his nephew Frodo. Gandalf begins to suspect the true nature of the Ring.',
    image: '/images/bilbo-party.jpg',
    side: 'right' as const
  },
  {
    year: 'TA 3018',
    title: 'The Council of Elrond',
    description: 'Representatives of Elves, Men, and Dwarves gather in Rivendell to decide the fate of the One Ring. The Fellowship of the Ring is formed, consisting of nine companions.',
    image: '/images/council-of-elrond.jpg',
    side: 'left' as const
  },
  {
    year: 'TA 3019 (Jan)',
    title: 'The Fall of Gandalf',
    description: 'The Fellowship attempts to cross the Misty Mountains through the Mines of Moria. They encounter the Balrog, and Gandalf falls into shadow after defeating it on the Bridge of Khazad-dûm.',
    image: '/images/moria.jpg',
    side: 'right' as const
  },
  {
    year: 'TA 3019 (Feb)',
    title: 'Breaking of the Fellowship',
    description: 'Boromir attempts to take the Ring from Frodo. The Fellowship is attacked by Uruk-hai, and Boromir is killed defending Merry and Pippin. Frodo and Sam continue to Mordor alone.',
    image: '/images/fellowship-breaking.jpg',
    side: 'left' as const
  },
  {
    year: 'TA 3019 (Mar)',
    title: 'Battle of the Hornburg',
    description: 'Also known as the Battle of Helm\'s Deep, where the forces of Rohan, led by King Théoden and aided by Gandalf the White, defend against Saruman\'s army of Uruk-hai.',
    image: '/images/helms-deep.jpg',
    side: 'right' as const
  },
  {
    year: 'TA 3019 (Mar)',
    title: 'Ents Destroy Isengard',
    description: 'Enraged by Saruman\'s destruction of forests, the Ents, led by Treebeard, attack Isengard, destroying Saruman\'s industry and trapping him in the tower of Orthanc.',
    image: '/images/isengard.jpg',
    side: 'left' as const
  },
  {
    year: 'TA 3019 (Mar)',
    title: 'Battle of the Pelennor Fields',
    description: 'The forces of Gondor and Rohan defend Minas Tirith against the armies of Mordor. King Théoden falls, and Éowyn slays the Witch-king of Angmar.',
    image: '/images/pelennor.jpg',
    side: 'right' as const
  },
  {
    year: 'TA 3019 (Mar)',
    title: 'Battle at the Black Gate',
    description: 'Aragorn leads the armies of the West to the Black Gate of Mordor to draw Sauron\'s attention away from Frodo and Sam as they approach Mount Doom.',
    image: '/images/black-gate.jpg',
    side: 'left' as const
  },
  {
    year: 'TA 3019 (Mar)',
    title: 'Destruction of the One Ring',
    description: 'Frodo, overcome by the Ring\'s power, claims it for himself at the Cracks of Doom. Gollum bites off Frodo\'s finger and falls into the lava with the Ring, destroying it and Sauron.',
    image: '/images/mount-doom.jpg',
    side: 'right' as const
  },
  {
    year: 'TA 3019 (May)',
    title: 'Coronation of King Elessar',
    description: 'Aragorn is crowned King Elessar of the Reunited Kingdom of Arnor and Gondor, and marries Arwen, daughter of Elrond.',
    image: '/images/coronation.jpg',
    side: 'left' as const
  },
  {
    year: 'TA 3021',
    title: 'End of the Third Age',
    description: 'Frodo, Bilbo, Gandalf, Elrond, and Galadriel sail from the Grey Havens to the Undying Lands. Sam returns to the Shire, marking the end of the Fellowship and the Third Age.',
    image: '/images/grey-havens.jpg',
    side: 'right' as const
  }
];

const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-12 px-4 bg-lotr-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/timeline-bg.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-lotr-dark/70 to-lotr-dark/90"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cinzel mb-6 text-lotr-gold">
                Timeline
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Follow the major events of the War of the Ring
              </p>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="relative">
              {/* Center line (visible only on md+ screens) */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-lotr-gold/30 z-0"></div>
              
              {/* Timeline Events */}
              <div className="flex flex-col">
                {timelineEvents.map((event, index) => (
                  <TimelineEvent
                    key={index}
                    year={event.year}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                    side={event.side}
                  />
                ))}
              </div>
            </div>
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

export default Timeline;
