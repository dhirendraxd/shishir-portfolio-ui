import { Code, Megaphone, PenTool, Search, Users } from "lucide-react";

const skillGroups = [
  {
    title: "UI/UX",
    icon: PenTool,
    items: ["Figma", "Prototyping", "Wireframing", "User Flows"],
  },
  {
    title: "Front-End",
    icon: Code,
    items: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    items: ["SEO", "Social Media Marketing", "Content Strategy"],
  },
  {
    title: "Research",
    icon: Search,
    items: ["User Research", "Market Research", "Insight Synthesis"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: ["Problem-solving", "Communication", "Leadership", "Negotiation"],
  },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="pb-2"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 tracking-wide flex items-center gap-2">
                <group.icon className="w-5 h-5 text-foreground/70" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
