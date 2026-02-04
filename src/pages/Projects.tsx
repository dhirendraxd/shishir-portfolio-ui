import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { allProjects } from "../components/Work";
import { useSeo } from "../hooks/use-seo";

const ProjectsPage = () => {
  const navigate = useNavigate();

  // SEO Hook
  useSeo({
    title: "Projects by Shishir Joshi - Design Portfolio & Creative Work",
    description: "Explore all design projects by Shishir Joshi. Discover a collection of graphic design, UI/UX design, and creative work showcasing expertise in visual design and research.",
    keywords: "Shishir Joshi, Projects, Portfolio, Graphic Design, UI/UX Design, Creative Work, Design Portfolio",
    ogType: "website",
    canonicalUrl: "https://shishirjoshi.com/projects",
    ogImage: "https://shishirjoshi.com/og-image.png"
  });

  return (
    <div className="min-h-screen bg-background pt-20 pb-24 px-6">
      {/* JSON-LD Schema Markup - Projects Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Projects by Shishir Joshi",
          "url": "https://shishirjoshi.com/projects",
          "description": "Collection of design projects and creative work by Shishir Joshi",
          "creator": {
            "@type": "Person",
            "name": "Shishir Joshi"
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-16 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        {/* Page Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.35em] text-foreground/40 uppercase mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground/90 mb-6">
            All Projects
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Explore my complete collection of design projects, experiments, and creative work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
