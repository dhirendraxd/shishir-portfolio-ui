"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const ProjectCard = ({ image, title, description, category }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay - subtle */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full text-foreground">
              {category}
            </span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
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

            {/* Image */}
            <img 
              src={image} 
              alt={title}
              loading="lazy"
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Info below image */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm text-white/70 mt-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
