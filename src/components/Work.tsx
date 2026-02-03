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
    category: "Design"
  },
  {
    image: visual2,
    title: "Creative Composition",
    description: "Artistic composition and visual storytelling",
    category: "Art Direction"
  },
  {
    image: visual3,
    title: "Design Study",
    description: "In-depth design study and experimentation",
    category: "Design"
  },
  {
    image: visual4,
    title: "Digital Design",
    description: "Modern digital design composition",
    category: "Digital Design"
  },
  {
    image: visual5,
    title: "Creative Concept",
    description: "Creative concept and visual exploration",
    category: "Concept Art"
  },
  {
    image: project4,
    title: "Project Four",
    description: "Professional project work",
    category: "Project"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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
            <ProjectCard key={index} {...project} />
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
