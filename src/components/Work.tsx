import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projects = [
  {
    image: project1,
    title: "Shape Studies",
    description: "Exploring geometric forms and color relationships",
    category: "Visual Design"
  },
  {
    image: project2,
    title: "Brand Identity System",
    description: "Complete visual identity for a local business",
    category: "Branding"
  },
  {
    image: project3,
    title: "Editorial Layout",
    description: "Magazine spread design and typography exploration",
    category: "Print Design"
  },
  {
    image: project4,
    title: "Creative Poster Series",
    description: "Playful typography and vibrant color compositions",
    category: "Poster Design"
  },
  {
    image: project5,
    title: "Digital Experience",
    description: "Mobile interface design with gradient aesthetics",
    category: "UI Design"
  }
];

const Work = () => {
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
