import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Hero = () => {
  const workSamples = [
    { src: project1, rotate: -15, xOffset: -100 },
    { src: project2, rotate: -5, xOffset: -30 },
    { src: project3, rotate: 5, xOffset: 40 },
    { src: project4, rotate: 12, xOffset: 110 },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Location badge */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-foreground uppercase">INDIA</p>
        <p className="text-[10px] text-muted-foreground/60 tracking-wider mt-1">hello@yourname.com</p>
      </div>

      {/* Main content */}
      <div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase mb-12 animate-fade-in">
          YOUR NAME
        </h1>
        
        {/* Work samples - overlapping cards with hover effects */}
        <div className="relative flex items-center justify-center w-full h-44 md:h-56 lg:h-64 mb-16 group/container">
          {workSamples.map((sample, index) => (
            <div
              key={index}
              className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-lg 
                         transition-all duration-500 ease-out cursor-pointer
                         group-hover/container:rotate-0 group-hover/container:shadow-xl
                         hover:!scale-110 hover:!-translate-y-4 hover:!shadow-2xl hover:!z-50 group"
              style={{
                transform: `translateX(${sample.xOffset}px) rotate(${sample.rotate}deg)`,
                zIndex: index + 1,
              }}
            >
              <style>
                {`.group\\/container:hover > div:nth-child(${index + 1}) {
                  transform: translateX(${(index - 1.5) * 160}px) rotate(0deg) !important;
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

        {/* Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-muted-foreground/30 tracking-wide uppercase leading-[1.1]">
          GRAPHIC DESIGNER,
          <br />
          <span className="italic font-normal">Researcher</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
