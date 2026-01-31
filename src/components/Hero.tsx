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
      {/* Location badge - top */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-foreground/70 uppercase">Kathmandu, Nepal</p>
      </div>

      {/* Main content */}
      <div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Name - Large heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase">
          Shishir Joshi
        </h1>
        
        {/* Work samples - colorful cards with hover effects */}
        <div className="relative flex items-center justify-center w-full h-48 md:h-56 lg:h-64 mb-4 group/container">
          {workSamples.map((sample, index) => (
            <div
              key={index}
              className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-xl 
                         transition-all duration-500 ease-out cursor-pointer
                         group-hover/container:rotate-0 group-hover/container:shadow-2xl
                         hover:!scale-110 hover:!-translate-y-6 hover:!shadow-2xl hover:!z-50 group"
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

        {/* Subtitle - Light gray, large text */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-muted-foreground/40 tracking-wider uppercase leading-tight">
          Graphic Designer
          <br />
          <span className="font-normal"> & Researcher</span>
        </h2>

        {/* Email - bottom */}
        <div className="mt-12">
          <a 
            href="mailto:shishirjoshi65@gmail.com"
            className="text-xs font-medium tracking-widest text-foreground/60 uppercase hover:text-accent transition-colors"
          >
            shishirjoshi65@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
