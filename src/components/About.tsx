import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import project4 from "../assets/project-4.jpg";
import geminiArt from "../assets/Gemini_Generated_Image_49ftr549ftr549ft.png";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "15+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I'm a passionate visual designer dedicated to creating meaningful digital experiences. With expertise in UI/UX design and branding, I transform ideas into compelling solutions.
              </p>
            </div>

            <button
              onClick={() => navigate('/resume')}
              className="inline-flex items-center gap-2 text-[#FF8C42] font-semibold hover:gap-3 transition-all duration-300 group"
            >
              More About Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-24 pt-16">
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-accent/20 pl-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Stack */}
          <div className="relative h-96 md:h-[550px] hidden lg:block perspective">
            {/* Decorative curved line */}
            <div className="absolute -top-12 left-0 right-0 h-32 border-l-2 border-b-2 border-accent/10 rounded-bl-3xl" />
            
            {/* Image Stack with 3D Effect */}
            <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
              {/* Back Image - geminiArt */}
              <div className="absolute top-12 left-8 w-80 h-[420px] rounded-3xl overflow-hidden shadow-2xl" style={{
                transform: "translateY(0px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}>
                <img 
                  src={geminiArt} 
                  alt="Design art" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Front Image - project4 */}
              <div className="absolute top-20 left-32 w-80 h-[420px] rounded-3xl overflow-hidden shadow-2xl z-10" style={{
                transform: "rotateZ(12deg) rotateX(-3deg) translateY(0px)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
              }}>
                <img 
                  src={project4} 
                  alt="Design project" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
