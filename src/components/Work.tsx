import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import visual1 from "../assets/visual-1.jpg";
import visual2 from "../assets/visual-2.jpg";
import visual3 from "../assets/visual-3.jpg";
import visual4 from "../assets/visual-4.png";
import visual5 from "../assets/visual-5.png";
import project4 from "../assets/project-4.jpg";

export const allProjects = [
  {
    image: visual1,
    title: "Visual Design Exploration",
    description: "Creative visual design exploration",
    category: "Design",
    details: "A visual exploration focused on composition, balance, and expressive typography with a modern editorial feel.",
    tools: ["Figma", "Illustrator", "Photoshop"],
    highlights: ["Built a flexible layout system", "Explored 3 distinct art directions"],
    role: "UI Designer",
    year: "2025"
  },
  {
    image: visual2,
    title: "Creative Composition",
    description: "Artistic composition and visual storytelling",
    category: "Art Direction",
    details: "A storytelling-driven composition exploring motion, form, and high-contrast color systems.",
    tools: ["Illustrator", "After Effects"],
    highlights: ["Defined a bold color palette", "Delivered 12+ visual frames"],
    role: "Art Director",
    year: "2024"
  },
  {
    image: visual3,
    title: "Design Study",
    description: "In-depth design study and experimentation",
    category: "Design",
    details: "A focused study on layout hierarchy, grid systems, and rhythm for digital product interfaces.",
    tools: ["Figma", "Notion"],
    highlights: ["Created 6 layout variants", "Validated spacing scales"],
    role: "Product Designer",
    year: "2024"
  },
  {
    image: visual4,
    title: "Digital Design",
    description: "Modern digital design composition",
    category: "Digital Design",
    details: "A modern digital layout concept with a focus on clean UI, soft shadows, and intuitive content flow.",
    tools: ["Figma", "Photoshop"],
    highlights: ["Optimized layout for readability", "Defined component library"],
    role: "UI Designer",
    year: "2025"
  },
  {
    image: visual5,
    title: "Creative Concept",
    description: "Creative concept and visual exploration",
    category: "Concept Art",
    details: "Concept exploration for a themed visual campaign with dynamic imagery and texture.",
    tools: ["Illustrator", "Photoshop"],
    highlights: ["Drafted 20+ sketch iterations", "Finalized hero art"],
    role: "Visual Designer",
    year: "2023"
  },
  {
    image: project4,
    title: "Project Four",
    description: "Professional project work",
    category: "Project",
    details: "Client project focused on brand identity and visual system for a modern product launch.",
    tools: ["Figma", "Illustrator", "Miro"],
    highlights: ["Delivered brand guidelines", "Designed landing page system"],
    role: "Brand Designer",
    year: "2023",
    link: "https://example.com"
  }
];

const Work = () => {
  const navigate = useNavigate();
  const projects = allProjects.slice(0, 3); // Show first 3 projects

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-accent-foreground uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Projects & Experiments
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A collection of design work from personal projects, coursework, 
            and freelance collaborations.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              variant="minimal"
              projects={projects}
              startIndex={index}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-[#FF8C42] font-semibold hover:gap-3 transition-all duration-300 group"
          >
            View More Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
