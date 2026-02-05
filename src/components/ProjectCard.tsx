"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectData {
  image: string;
  title: string;
  description: string;
  category: string;
  details?: string;
  tools?: string[];
  highlights?: string[];
  role?: string;
  year?: string;
  link?: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  details?: string;
  tools?: string[];
  highlights?: string[];
  role?: string;
  year?: string;
  link?: string;
  variant?: "default" | "minimal";
  projects?: ProjectData[];
  startIndex?: number;
}

const ProjectCard = ({
  image,
  title,
  description,
  category,
  details,
  tools,
  highlights,
  role,
  year,
  link,
  variant = "default",
  projects,
  startIndex = 0
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const isMinimal = variant === "minimal";

  const activeProject = useMemo(() => {
    if (projects && projects.length > 0) {
      return projects[activeIndex] ?? projects[0];
    }
    return {
      image,
      title,
      description,
      category,
      details,
      tools,
      highlights,
      role,
      year,
      link
    } as ProjectData;
  }, [
    projects,
    activeIndex,
    image,
    title,
    description,
    category,
    details,
    tools,
    highlights,
    role,
    year,
    link
  ]);

  const hasMultiple = (projects?.length ?? 0) > 1;
  const handlePrev = () => {
    if (!projects || projects.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const handleNext = () => {
    if (!projects || projects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <>
      <div 
        className="group cursor-pointer"
        onClick={() => {
          setActiveIndex(startIndex);
          setIsOpen(true);
        }}
      >
        <div className="relative overflow-hidden rounded-xl bg-black/5">
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-semibold text-sm">View Project</span>
          </div>
        </div>

        <h3 className="mt-4 text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-200 leading-snug">
          {title}
        </h3>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-6xl max-h-[92vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* Image with hover details */}
              <div className="relative bg-black/5 group">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title}
                  loading="lazy"
                  className="w-full object-cover max-h-[80vh]"
                />

                {hasMultiple && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 bg-transparent text-cyan-300 opacity-60 hover:opacity-100 hover:text-cyan-200 transition-all duration-300 z-20 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="h-6 w-6 mx-auto" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 bg-transparent text-cyan-300 opacity-60 hover:opacity-100 hover:text-cyan-200 transition-all duration-300 z-20 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                      aria-label="Next project"
                    >
                      <ChevronRight className="h-6 w-6 mx-auto" />
                    </button>
                  </>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 pointer-events-none" />

                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full p-6 md:p-8 text-white pointer-events-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-white">
                        {activeProject.category}
                      </span>
                      {activeProject.year && (
                        <span className="text-xs text-white/70">
                          {activeProject.year}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-2">
                      {activeProject.description}
                    </p>

                    {activeProject.details && (
                      <p className="text-sm text-white/75 mt-3 leading-relaxed">
                        {activeProject.details}
                      </p>
                    )}

                    {(activeProject.role || activeProject.tools?.length) && (
                      <div className="mt-4 space-y-3">
                        {activeProject.role && (
                          <div>
                            <p className="text-xs font-semibold tracking-wide text-white/60 uppercase mb-1">
                              Role
                            </p>
                            <p className="text-sm text-white/85">
                              {activeProject.role}
                            </p>
                          </div>
                        )}

                        {activeProject.tools && activeProject.tools.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold tracking-wide text-white/60 uppercase mb-1">
                              Tools & Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {activeProject.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/85"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {activeProject.highlights && activeProject.highlights.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-semibold tracking-wide text-white/60 uppercase mb-1">
                          Highlights
                        </p>
                        <ul className="text-sm text-white/80 space-y-2 list-disc pl-5">
                          {activeProject.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeProject.link && (
                      <div className="mt-5">
                        <a
                          href={activeProject.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white px-4 py-2 text-sm font-semibold hover:border-white/60 hover:text-white transition-colors"
                        >
                          Visit Project
                        </a>
                      </div>
                    )}

                    {hasMultiple && (
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex gap-2">
                          {projects?.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveIndex(idx)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                idx === activeIndex
                                  ? "w-8 bg-cyan-300"
                                  : "w-2 bg-white/30 hover:bg-white/50"
                              }`}
                              aria-label={`Go to project ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-white/70">
                          {activeIndex + 1} / {projects?.length}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
