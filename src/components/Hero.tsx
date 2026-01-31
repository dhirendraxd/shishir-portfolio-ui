import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Hero = () => {
  const workSamples = [
    { src: project1, rotate: -15, xOffset: -100 },
    { src: project2, rotate: -5, xOffset: -35 },
    { src: project3, rotate: 5, xOffset: 35 },
    { src: project4, rotate: 12, xOffset: 100 },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-between px-8 md:px-16 lg:px-24 py-12 md:py-16 relative overflow-hidden bg-background">
      {/* Location & Email - Top center with spacing */}
      <div className="w-full text-center space-y-1 -mt-4 mb-0">
        <p className="text-[9px] font-bold tracking-[0.35em] text-foreground uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Kathmandu, Nepal</p>
        <p className="text-[9px] font-medium tracking-wider" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>shishirjoshi65@gmail.com</p>
      </div>

      {/* Main centered content - Full width */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-1">
        
        {/* Name - Very Large, Primary Focus - SINGLE LINE - BLACK COLOR */}
        <h1 className="text-6xl md:text-6xl lg:text-8xl font-[900] tracking-tighter uppercase text-center leading-none mt-12 mb-14 md:mb-20 lg:mb-24 whitespace-nowrap" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 900, letterSpacing: '-0.02em', color: '#000000' }}>
          Shishir Joshi
        </h1>
        
        {/* Work samples - GENEROUS SPACING & SIZE - PRIMARY VISUAL */}
        <div className="relative flex items-center justify-center w-full max-w-6xl h-72 md:h-80 lg:h-[28rem] group/container -mt-4 mb-8 md:mb-10 lg:mb-12">
          {workSamples.map((sample, index) => (
            <div
              key={index}
              className="absolute w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-2xl 
                         transition-all duration-500 ease-out cursor-pointer
                         group-hover/container:rotate-0 group-hover/container:shadow-2xl
                         hover:!scale-105 hover:!-translate-y-8 hover:!shadow-2xl hover:!z-50"
              style={{
                transform: `translateX(${sample.xOffset}px) rotate(${sample.rotate}deg)`,
                zIndex: index + 1,
              }}
            >
              <style>
                {`.group\\/container:hover > div:nth-child(${index + 1}) {
                  transform: translateX(${(index - 1.5) * 220}px) rotate(0deg) !important;
                }`}
              </style>
              <img 
                src={sample.src} 
                alt={`Work sample ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
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
