import { ArrowLeft, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, Linkedin, Github, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SOCIAL_LINKS } from "../lib/constants";
import kistLogo from "../assets/kist-logo.jpg";
import trinityLogo from "../assets/trinity-logo.jpg";

const Resume = () => {
  const navigate = useNavigate();

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
    { category: "Design Tools", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "Sketch"] },
    { category: "UI/UX", items: ["Wireframing", "Prototyping", "User Research", "Information Architecture", "Design Systems"] },
    { category: "Digital Marketing", items: ["Social Media Graphics", "Content Creation", "Brand Strategy", "Campaign Design"] },
    { category: "Research", items: ["User Testing", "Market Analysis", "Competitive Research", "Data Analysis"] },
    { category: "Soft Skills", items: ["Communication", "Collaboration", "Problem Solving", "Time Management", "Creativity"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-foreground">Resume</h1>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Personal Info Header */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Shishir Joshi</h2>
              <p className="text-xl text-muted-foreground mb-4">Visual Designer & UI/UX Specialist</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>shishirjoshi65@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
            <button className="bg-[#6B8E23] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#556B1F] transition-colors shadow-md">
              Download PDF
            </button>
          </div>
        </div>

        {/* Connect */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Connect</h3>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((social, index) => {
              const getIcon = () => {
                if (social.label === "LinkedIn") return <Linkedin className="w-5 h-5" />;
                if (social.label === "GitHub") return <Github className="w-5 h-5" />;
                if (social.label === "Twitter") return <Twitter className="w-5 h-5" />;
                if (social.label === "Email") return <Mail className="w-5 h-5" />;
                return null;
              };

              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B8E23]/10 text-[#6B8E23] rounded-lg font-medium hover:bg-[#6B8E23] hover:text-white transition-colors"
                >
                  {getIcon()}
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-[#6B8E23]" />
            <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-[#6B8E23] pl-6 pb-6 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{job.role}</h4>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">{job.period}</span>
                </div>
                <p className="text-muted-foreground mb-3">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[#6B8E23] mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-[#6B8E23]" />
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground/70">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      edu.status === "Ongoing" ? "bg-[#6B8E23]/10 text-[#6B8E23]" : "bg-gray-100 text-gray-600"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 ml-16">
                  {edu.description}
                </p>
                {index < education.length - 1 && (
                  <div className="border-t border-gray-200 mt-6 pt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-2xl font-bold text-foreground">Social</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((social, index) => {
              const getIcon = () => {
                if (social.label === "LinkedIn") return <Linkedin className="w-5 h-5" />;
                if (social.label === "GitHub") return <Github className="w-5 h-5" />;
                if (social.label === "Twitter") return <Twitter className="w-5 h-5" />;
                if (social.label === "Email") return <Mail className="w-5 h-5" />;
                return null;
              };

              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B8E23]/10 text-[#6B8E23] rounded-lg font-medium hover:bg-[#6B8E23] hover:text-white transition-colors"
                >
                  {getIcon()}
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-[#6B8E23]" />
            <h3 className="text-2xl font-bold text-foreground">Skills & Expertise</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-[#6B8E23]/10 text-[#6B8E23] text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
