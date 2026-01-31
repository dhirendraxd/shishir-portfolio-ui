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
              Learning, Growing, Creating
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an early-career graphic designer with 6–8 months of hands-on experience 
                in visual design. My journey began with a deep curiosity for how visuals 
                communicate ideas and emotions.
              </p>
              <p>
                Alongside design, I've worked as a researcher, which has shaped my 
                analytical approach to creative problems. I believe good design isn't 
                just about aesthetics—it's about understanding context, audience, and purpose.
              </p>
              <p>
                Currently pursuing my bachelor's degree, I'm constantly learning and 
                experimenting with new techniques and ideas. Every project is an 
                opportunity to grow and refine my craft.
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
