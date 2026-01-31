import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Hero = () => {
  const workSamples = [
    { src: project1, shape: 'box', width: 'w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72', top: '40%', left: '25%', rotate: -8 },
    { src: project2, shape: 'box', width: 'w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72', top: '48%', left: '40%', rotate: 5 },
    { src: project3, shape: 'box', width: 'w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72', top: '38%', left: '55%', rotate: -5 },
    { src: project4, shape: 'box', width: 'w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72', top: '48%', left: '70%', rotate: 8 },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-between px-8 md:px-16 lg:px-24 py-12 md:py-16 relative overflow-hidden bg-background">
      {/* Location & Email - Top center with spacing */}
      <div className="w-full text-center space-y-1 -mt-4 mb-0">
        <p className="text-[9px] font-bold tracking-[0.35em] text-foreground uppercase cursor-pointer transition-colors duration-300 hover:text-[#1DA1F2]" style={{ fontFamily: 'Inter, sans-serif' }}>Kathmandu, Nepal</p>
        <a href="mailto:shishirjoshi65@gmail.com" className="text-[9px] font-medium tracking-wider cursor-pointer transition-colors duration-300 hover:text-[#1DA1F2] block" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>shishirjoshi65@gmail.com</a>
      </div>

      {/* Main centered content - Full width */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-1">
        
        {/* Name - Very Large, Primary Focus - SINGLE LINE - BLACK COLOR */}
        <h1 className="text-6xl md:text-6xl lg:text-8xl font-[900] tracking-tighter uppercase text-center leading-none mt-12 mb-14 md:mb-20 lg:mb-24 whitespace-nowrap" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 900, letterSpacing: '-0.02em', color: '#000000' }}>
          Shishir Joshi
        </h1>
        
        {/* Work samples - GENEROUS SPACING & SIZE - PRIMARY VISUAL */}
        <div className="relative flex items-center justify-center w-full max-w-6xl group/container -mt-4 mb-8 md:mb-10 lg:mb-12" style={{ height: '450px' }}>
          {workSamples.map((sample, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden shadow-2xl transition-all duration-500 ease-out ${sample.width} ${sample.shape === 'circle' ? 'rounded-full' : 'rounded-3xl'}`}
              style={{
                top: sample.top,
                left: sample.left,
                transform: `translate(-50%, -50%) rotate(${sample.rotate}deg)`,
                zIndex: index + 1,
              }}
            >
              <img 
                src={sample.src} 
                alt={`Work sample ${index + 1}`}
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

      {/* Clients/Experience teaser - Scroll cue at bottom */}
      <div className="w-full text-center pb-4 mt-16">
        <p className="text-xs font-bold tracking-[0.25em] text-foreground uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Clients</p>
        <p className="text-[11px] tracking-wider leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
          ChimpVine
        </p>
      </div>
    </section>
  );
};

export default Hero;
