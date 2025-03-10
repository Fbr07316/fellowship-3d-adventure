
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const featuredSections = [
  {
    id: 'characters',
    title: 'Characters',
    description: 'Meet the heroes and villains of Middle-earth.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    link: '/characters'
  },
  {
    id: 'map',
    title: 'Middle-earth Map',
    description: 'Explore the lands of Tolkien\'s legendary world.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    link: '/map'
  },
  {
    id: 'timeline',
    title: 'Timeline',
    description: 'Follow the major events of the saga.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    link: '/timeline'
  },
  {
    id: 'gallery',
    title: 'Gallery',
    description: 'Discover iconic scenes and moments.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    link: '/gallery'
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with 3D Ring */}
      <HeroSection />
      
      {/* Featured Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-16">
            <span className="text-lotr-gold">Explore</span> Middle-earth
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSections.map((section) => (
              <Link 
                key={section.id}
                to={section.link}
                className="group rounded-lg overflow-hidden shadow-soft hover-scale bg-card"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-cinzel mb-2 group-hover:text-lotr-gold transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {section.description}
                  </p>
                  <div className="flex items-center text-lotr-gold text-sm font-medium">
                    <span>Discover</span>
                    <ArrowRight size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-20 px-4 bg-lotr-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/forest-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-cinzel leading-relaxed text-lotr-light italic mb-8">
              "All we have to decide is what to do with the time that is given us."
            </p>
            <footer className="text-lotr-gold">— Gandalf the Grey</footer>
          </blockquote>
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
              {featuredSections.map((section) => (
                <Link 
                  key={section.id}
                  to={section.link}
                  className="text-white/80 hover:text-lotr-gold transition-colors text-sm text-center md:text-left"
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/60 text-xs">
            <p>Created with love for Middle-earth fans everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
