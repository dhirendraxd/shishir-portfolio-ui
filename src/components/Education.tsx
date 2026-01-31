import kistLogo from "@/assets/kist-logo.jpg";
import trinityLogo from "@/assets/trinity-logo.jpg";

const education = [
  {
    logo: kistLogo,
    logoAlt: "KIST College of Management logo",
    degree: "Bachelor in Information Management",
    institution: "KIST College of Management",
    location: "Kathmandu, Nepal",
    period: "2023 – 2027",
    status: "Ongoing",
    description: "Design-led management studies with a focus on UI/UX and research."
  },
  {
    logo: trinityLogo,
    logoAlt: "Trinity International College logo",
    degree: "High School",
    institution: "Trinity International College",
    location: "Kathmandu, Nepal",
    period: "2022 – 2023",
    status: "Completed",
    description: "Completed higher secondary studies with strong academic performance."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-foreground/60 uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-8 h-[calc(100%-2rem)] w-px bg-border/50" />
          
          <div className="space-y-16">
            {education.map((item, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline node - clean dot */}
                <div className="absolute -left-2 top-2 h-4 w-4 rounded-full border-2 border-foreground/30 bg-background shadow-sm" />

                {/* Content - minimal layout */}
                <div>
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={item.logo}
                        alt={item.logoAlt}
                        loading="lazy"
                        className="h-12 w-12 object-contain flex-shrink-0"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.degree}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            {item.institution}
                          </p>
                          <p className="text-xs text-muted-foreground/70">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-2 pl-16">
                    <span className="text-xs font-medium text-foreground/60">{item.period}</span>
                    <div className="flex items-center gap-2">
                      <span className={`inline-block h-2 w-2 rounded-full ${
                        item.status === "Ongoing" 
                          ? "bg-accent" 
                          : "bg-foreground/30"
                      }`} />
                      <span className={`text-xs font-medium ${
                        item.status === "Ongoing" 
                          ? "text-accent" 
                          : "text-foreground/50"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed pl-16">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
