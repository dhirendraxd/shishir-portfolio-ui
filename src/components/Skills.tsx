const uiuxSkills = [
  "Figma",
  "Prototyping",
  "Wireframing",
  "UI/UX Design",
  "Branding",
  "Social Media Graphics",
  "Poster Design",
  "Digital Illustration"
];

const frontEndSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Front End Development",
  "Web Design"
];

const digitalMarketingSkills = [
  "SEO",
  "Social Media Marketing",
  "Content Strategy",
  "Digital Marketing"
];

const otherSkills = [
  "Research",
  "Problem-solving",
  "Communication",
  "Leadership",
  "Negotiation"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* UI/UX skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              UI/UX Design
            </h3>
            <div className="flex flex-wrap gap-3">
              {uiuxSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Front-End skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Front-End Dev
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontEndSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Digital Marketing skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Digital Marketing
            </h3>
            <div className="flex flex-wrap gap-3">
              {digitalMarketingSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
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
