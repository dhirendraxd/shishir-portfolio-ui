interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const ProjectCard = ({ image, title, description, category }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full text-foreground">
            {category}
          </span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mt-1">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
