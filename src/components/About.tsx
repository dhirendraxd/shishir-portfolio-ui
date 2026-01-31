import aboutIllustration from "@/assets/about-illustration.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-widest text-accent-foreground uppercase">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Creative Designer & Researcher
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Shishir Joshi, a creative and detail-oriented Graphic Designer passionate about transforming ideas into visually impactful designs. I specialize in creating compelling visual content — from branding and social media graphics to posters, infographics, and digital illustrations.
              </p>
              <p>
                With a strong background in research and a keen eye for design, I combine analytical thinking with creative problem-solving. I believe good design isn't just about aesthetics—it's about understanding context, audience, and purpose to create meaningful visual experiences.
              </p>
              <p>
                Currently working as an Independent Researcher and Graphic Designer, I help students and professionals with customized study guides, research briefs, and visual design solutions. Every project is an opportunity to grow and refine my craft.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={aboutIllustration} 
                alt="Designer working at desk illustration" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/40 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
