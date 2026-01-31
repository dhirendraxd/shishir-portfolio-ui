const designSkills = [
  "Photoshop",
  "Photography",
  "Technical Drawing",
  "UI/UX Design",
  "Branding",
  "Social Media Graphics",
  "Poster Design",
  "Digital Illustration"
];

const researchSkills = [
  "Research",
  "Front End Development",
  "Academic Writing",
  "Critical Analysis",
  "Problem Solving",
  "Visual Communication"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-accent-foreground uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Design skills */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Design
            </h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Research skills */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Research
            </h3>
            <div className="flex flex-wrap gap-3">
              {researchSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
