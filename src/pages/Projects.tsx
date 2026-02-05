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
    <div className="min-h-screen bg-[#f6f6f7] pt-16 pb-24 px-6">
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

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Hero */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.35em] text-foreground/40 uppercase mb-4">
            Portfolio
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground/90 mb-3">
            Now you can do <span className="text-primary">everything</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Find, explore, and learn in one awesome place. Discover featured work and the full project collection.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 rounded-full bg-white shadow-sm border border-black/5 px-4 py-3">
              <input
                type="text"
                placeholder="Search what ever you want"
                className="flex-1 bg-transparent outline-none text-sm md:text-base text-foreground/80 placeholder:text-foreground/40"
                aria-label="Search projects"
              />
              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              projects={allProjects}
              startIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
