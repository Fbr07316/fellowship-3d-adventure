
import { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import * as THREE from 'three';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Initialize Three.js
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 30;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    canvasRef.current.innerHTML = '';
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create golden rings
    const rings: THREE.Mesh[] = [];
    const ringGeometry = new THREE.TorusGeometry(10, 0.2, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xC9A855,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xC9A855,
      emissiveIntensity: 0.2
    });

    // Create the One Ring
    const mainRing = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(mainRing);
    rings.push(mainRing);
    
    // Create additional decorative rings
    for (let i = 0; i < 6; i++) {
      const radius = 3 + i * 1.5;
      const smallRingGeometry = new THREE.TorusGeometry(radius, 0.05, 16, 50);
      const smallRingMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xC9A855,
        metalness: 0.7,
        roughness: 0.3,
        transparent: true,
        opacity: 0.7,
      });
      
      const ring = new THREE.Mesh(smallRingGeometry, smallRingMaterial);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      scene.add(ring);
      rings.push(ring);
    }
    
    ringsRef.current = rings;
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light (simulates the reflection)
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    
    // Add point light at the center (for the glow)
    const pointLight = new THREE.PointLight(0xffd700, 1, 100);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);
    
    // Animation loop
    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      requestAnimationFrame(animate);
      
      // Rotate the rings
      ringsRef.current.forEach((ring, i) => {
        if (i === 0) {
          // Main ring animation
          ring.rotation.x += 0.002;
          ring.rotation.y += 0.003;
        } else {
          // Small rings animation
          ring.rotation.x += 0.001 + (i * 0.0005);
          ring.rotation.y += 0.002 - (i * 0.0003);
        }
      });
      
      // Add subtle floating animation
      const time = Date.now() * 0.001;
      cameraRef.current.position.y = Math.sin(time * 0.5) * 0.5;
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && rendererRef.current.domElement && canvasRef.current) {
        canvasRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      ref={heroRef} 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Animation Container */}
      <div 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0" 
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-cinzel mb-4 text-lotr-gold text-shadow">
          The Lord of the Rings
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto font-cinzel text-white/90 mb-8 text-shadow">
          Journey through the epic saga of Middle-earth
        </p>
      </div>
      
      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white flex flex-col items-center justify-center transition-colors duration-300 z-10"
        aria-label="Scroll down"
      >
        <span className="font-cinzel text-sm mb-2">Explore</span>
        <ChevronDown size={24} className="animate-bounce" />
      </button>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-lotr-dark/20 via-lotr-dark/40 to-lotr-dark/90 z-5" />
    </div>
  );
};

export default HeroSection;
