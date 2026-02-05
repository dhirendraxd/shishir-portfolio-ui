import { useState, useEffect, useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";
import visual5 from "@/assets/visual-5.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const workSamples = [
    { src: project1, shape: 'box', width: 'w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72', top: '40%', left: '25%', rotate: -8, parallaxStrength: 0.8 },
    { src: project2, shape: 'box', width: 'w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72', top: '48%', left: '40%', rotate: 5, parallaxStrength: 1.2 },
    { src: visual5, shape: 'box', width: 'w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72', top: '38%', left: '55%', rotate: -5, parallaxStrength: 1.5 },
    { src: project4, shape: 'box', width: 'w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72', top: '48%', left: '70%', rotate: 8, parallaxStrength: 0.9 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate offset from center (-1 to 1 range)
        const offsetX = (x - centerX) / centerX;
        const offsetY = (y - centerY) / centerY;
        
        // Map to subtle movement range (±15px)
        setMousePosition({
          x: offsetX * 15,
          y: offsetY * 15,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-between px-8 md:px-16 lg:px-24 py-6 md:py-8 relative overflow-hidden bg-background">
      {/* Location & Email - Top center with spacing */}
      <div className="w-full text-center space-y-1 -mt-4 mb-0">
        <p className="text-[9px] font-bold tracking-[0.35em] text-foreground uppercase cursor-pointer transition-colors duration-300 hover:text-accent" style={{ fontFamily: 'Inter, sans-serif' }}>Kathmandu, Nepal</p>
        <a href="mailto:shishirjoshi65@gmail.com" className="text-[9px] font-medium tracking-wider cursor-pointer transition-colors duration-300 hover:text-accent block" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>shishirjoshi65@gmail.com</a>
      </div>

      {/* Main centered content - Full width */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-1">
        
        {/* Name - Very Large, Primary Focus - SINGLE LINE - BLACK COLOR */}
        <h1 className="text-6xl md:text-6xl lg:text-8xl font-[900] tracking-tighter uppercase text-center leading-none -mt-16 mb-4 md:mb-6 lg:mb-8 whitespace-nowrap" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 900, letterSpacing: '-0.02em', color: '#000000' }}>
          Shishir Joshi
        </h1>
        
        {/* Work samples - GENEROUS SPACING & SIZE - PRIMARY VISUAL */}
        <div ref={containerRef} className="relative flex items-center justify-center w-full max-w-6xl group/container -mt-8 mb-2 md:mb-3 lg:mb-4" style={{ height: '450px' }}>
          {workSamples.map((sample, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden shadow-2xl transition-transform duration-200 ease-out ${sample.width} ${sample.shape === 'circle' ? 'rounded-full' : 'rounded-3xl'}`}
              style={{
                top: sample.top,
                left: sample.left,
                transform: `translate(calc(-50% + ${mousePosition.x * sample.parallaxStrength}px), -50%) rotate(${sample.rotate}deg)`,
                zIndex: index + 1,
              }}
            >
              <img 
                src={sample.src} 
                alt={`Work sample ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Professional Titles - Very large, light gray, prominent - THICK FONT */}
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-[700] text-foreground/25 tracking-wide uppercase text-center leading-tight -mt-16" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
          Graphic Designer,
          <br />
          <span className="font-[800]" style={{ fontWeight: 800 }}>UI/UX & Researcher</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
