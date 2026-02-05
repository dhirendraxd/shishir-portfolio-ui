import { ArrowLeft, Mail, MapPin, Linkedin, Github, Twitter, Palette, Layout, Users, Search, MessageCircle, Lightbulb, Target, BarChart, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SOCIAL_LINKS } from "../lib/constants";
import { useSeo } from "../hooks/use-seo";
import kistLogo from "../assets/kist-logo.jpg";
import trinityLogo from "../assets/trinity-logo.jpg";

const AboutMe = () => {
  const navigate = useNavigate();

  // SEO Hook
  useSeo({
    title: "About Shishir Joshi - Graphic Designer & Researcher | Full Resume",
    description: "Learn about Shishir Joshi - an early-career graphic designer, UI/UX designer, and researcher. Explore experience, education, skills, and expertise in visual design and research-driven solutions.",
    keywords: "Shishir Joshi, About, Graphic Designer, UI/UX Designer, Researcher, Resume, Portfolio, Kathmandu",
    ogType: "website",
    canonicalUrl: "https://shishirjoshi.com/about-me",
    ogImage: "https://shishirjoshi.com/og-image.png"
  });

  const experience = [
    {
      role: "Graphic Designer & Researcher",
      company: "Independent / Freelance",
      period: "2022 - Present",
      description: "Creating visual designs, branding materials, and conducting design research for various clients.",
      achievements: [
        "Designed 50+ social media graphics and brand materials",
        "Conducted user research for multiple digital products",
        "Developed comprehensive brand identities for local businesses"
      ]
    },
    {
      role: "UI/UX Designer",
      company: "Freelance Projects",
      period: "2023 - Present",
      description: "Designing user interfaces and experiences for web and mobile applications.",
      achievements: [
        "Created wireframes and prototypes for 10+ projects",
        "Improved user engagement by 40% through redesigns",
        "Collaborated with developers on implementation"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor in Information Management",
      institution: "KIST College of Management",
      location: "Kathmandu, Nepal",
      period: "2023 – 2027",
      status: "Ongoing",
      logo: kistLogo,
      description: "Design-led management studies with a focus on UI/UX and research."
    },
    {
      degree: "High School",
      institution: "Trinity International College",
      location: "Kathmandu, Nepal",
      period: "2022 – 2023",
      status: "Completed",
      logo: trinityLogo,
      description: "Completed higher secondary studies with strong academic performance."
    }
  ];

  const skills = [
    { 
      category: "Design Tools", 
      items: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg", color: "#F24E1E" },
        { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg", color: "#31A8FF" },
        { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeillustrator.svg", color: "#FF9A00" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg", color: "#00C4CC" },
        { name: "Sketch", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sketch.svg", color: "#F7B500" }
      ]
    },
    { 
      category: "UI/UX", 
      items: [
        { name: "Wireframing", iconComponent: Layout, color: "#FF8C42" },
        { name: "Prototyping", iconComponent: Palette, color: "#FF8C42" },
        { name: "User Research", iconComponent: Users, color: "#FF8C42" },
        { name: "Information Architecture", iconComponent: Target, color: "#FF8C42" },
        { name: "Design Systems", iconComponent: Layout, color: "#FF8C42" }
      ]
    },
    { 
      category: "Research", 
      items: [
        { name: "User Testing", iconComponent: Users, color: "#6B8E23" },
        { name: "Market Analysis", iconComponent: BarChart, color: "#6B8E23" },
        { name: "Competitive Research", iconComponent: Search, color: "#6B8E23" },
        { name: "Data Analysis", iconComponent: BarChart, color: "#6B8E23" }
      ]
    },
    { 
      category: "Soft Skills", 
      items: [
        { name: "Communication", iconComponent: MessageCircle, color: "#9333EA" },
        { name: "Collaboration", iconComponent: Users, color: "#9333EA" },
        { name: "Problem Solving", iconComponent: Lightbulb, color: "#9333EA" },
        { name: "Time Management", iconComponent: Clock, color: "#9333EA" },
        { name: "Creativity", iconComponent: Palette, color: "#9333EA" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Schema Markup - About Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "name": "About Shishir Joshi",
          "url": "https://shishirjoshi.com/about-me",
          "about": {
            "@type": "Person",
            "name": "Shishir Joshi",
            "jobTitle": [
              "Graphic Designer",
              "UI/UX Designer",
              "Researcher"
            ],
            "image": "https://shishirjoshi.com/shishir-profile.jpg",
            "email": "shishirjoshi65@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kathmandu",
              "addressCountry": "NP"
            },
            "workLocation": {
              "@type": "City",
              "name": "Kathmandu, Nepal"
            }
          }
        })}
      </script>

      {/* Header */}
      <div className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Personal Info Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Shishir Joshi</h1>
          <p className="text-xl md:text-2xl text-foreground/60 mb-8">Visual Designer & UI/UX Specialist</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-foreground/70 mb-8">
            <a href="mailto:shishirjoshi65@gmail.com" className="flex items-center gap-2 hover:text-[#FF8C42] transition-colors">
              <Mail className="w-4 h-4" />
              <span>shishirjoshi65@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 text-[#FF8C42] hover:text-[#e67a35] transition-colors font-medium group">
            Download Resume
            <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.35em] text-foreground/40 uppercase mb-3">Experience</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/70">Work History</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">{job.role}</h3>
                    <p className="text-foreground/60 font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-foreground/50 mt-1 md:mt-0">{job.period}</span>
                </div>
                <p className="text-foreground/60 mb-4 leading-relaxed">{job.description}</p>
                <ul className="space-y-2.5">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/70">
                      <span className="text-[#FF8C42] mt-1.5 text-lg">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
                {index < experience.length - 1 && (
                  <div className="border-t border-foreground/10 mt-12" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.35em] text-foreground/40 uppercase mb-3">Academic</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/70">Education</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="h-14 w-14 rounded-xl object-cover border border-foreground/10"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-foreground/70 font-medium">{edu.institution}</p>
                      <p className="text-sm text-foreground/50">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground/60">{edu.period}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      edu.status === "Ongoing" ? "bg-[#FF8C42]/10 text-[#FF8C42]" : "bg-foreground/5 text-foreground/60"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                <p className="text-foreground/60 leading-relaxed ml-0 md:ml-[4.5rem]">
                  {edu.description}
                </p>
                {index < education.length - 1 && (
                  <div className="border-t border-foreground/10 mt-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.35em] text-foreground/40 uppercase mb-3">Expertise</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/70">Skills & Tools</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground/80">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((skill, idx) => {
                    const hasIcon = 'icon' in skill;
                    const hasIconComponent = 'iconComponent' in skill;
                    const IconComponent = hasIconComponent ? skill.iconComponent : null;
                    
                    return (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/10 hover:border-[#FF8C42]/50 text-foreground/70 hover:text-foreground text-sm rounded-lg transition-colors group"
                      >
                        {hasIcon ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-4 h-4"
                            style={{
                              filter: 'brightness(0) saturate(100%)',
                              WebkitMaskImage: `url(${skill.icon})`,
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskSize: 'contain',
                              backgroundColor: skill.color
                            }}
                          />
                        ) : IconComponent ? (
                          <IconComponent className="w-4 h-4" style={{ color: skill.color }} />
                        ) : null}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.35em] text-foreground/40 uppercase mb-3">Let's Connect</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/70">Get In Touch</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {SOCIAL_LINKS.map((social, index) => {
              const getIcon = () => {
                if (social.label === "LinkedIn") return <Linkedin className="w-6 h-6 md:w-7 md:h-7" />;
                if (social.label === "GitHub") return <Github className="w-6 h-6 md:w-7 md:h-7" />;
                if (social.label === "Twitter") return <Twitter className="w-6 h-6 md:w-7 md:h-7" />;
                if (social.label === "Email") return <Mail className="w-6 h-6 md:w-7 md:h-7" />;
                return null;
              };

              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-foreground/70 hover:text-[#FF8C42] transition-colors"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {getIcon()}
                  </div>
                  <span className="text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
