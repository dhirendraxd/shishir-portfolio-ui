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
    description: "Design-led management studies with a focus on UI/UX and research."
  },
  {
    logo: trinityLogo,
    logoAlt: "Trinity International College logo",
    degree: "High School",
    institution: "Trinity International College, DilliBazar, Kathmandu",
    period: "2022 – 2023",
    status: "Completed",
    description: "Completed higher secondary studies with strong academic performance."
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
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-border" />
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative pl-16">
                {/* Timeline node */}
                <div className="absolute left-2.5 top-7 h-7 w-7 rounded-full border-2 border-accent bg-accent shadow-sm" />

                {/* Card */}
                <div className="flex flex-col sm:flex-row gap-6 pb-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-accent/20 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      className="w-14 h-14 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
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
                    <p className="text-muted-foreground text-base mb-2">
                      {item.institution} • {item.period}
                    </p>
                    <p className="text-muted-foreground text-base">
                      {item.description}
                    </p>
                  </div>
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
