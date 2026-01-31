import kistLogo from "@/assets/kist-logo.jpg";
import trinityLogo from "@/assets/trinity-logo.jpg";

const education = [
  {
    logo: kistLogo,
    logoAlt: "KIST College of Management logo",
    degree: "Bachelor in Information Management",
    institution: "KIST College of Management, Kamalpokhari, Kathmandu",
    period: "2023 – 2027",
    status: "Ongoing",
    description: "Pursuing undergraduate studies with focus on design, development, and visual communication."
  },
  {
    logo: trinityLogo,
    logoAlt: "Trinity International College logo",
    degree: "High School",
    institution: "Trinity International College, DilliBazar, Kathmandu",
    period: "2022 – 2023",
    status: "Completed",
    description: "Successfully completed high school education."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-accent-foreground uppercase mb-4">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <div 
              key={index}
              className="relative flex gap-6 p-6 bg-card rounded-2xl border border-border hover:border-accent/50 transition-colors"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    item.status === "Ongoing" 
                      ? "bg-accent/30 text-accent-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-1">
                  {item.institution} • {item.period}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
