import { SOCIAL_LINKS } from "../lib/constants";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-foreground/60 uppercase mb-3">
            Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Social
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {SOCIAL_LINKS.map((social, index) => {
            const getIcon = () => {
              if (social.label === "LinkedIn") return {
                url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
                color: "#0A66C2"
              };
              if (social.label === "GitHub") return {
                url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
                color: "#181717"
              };
              if (social.label === "Twitter") return {
                url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg",
                color: "#000000"
              };
              if (social.label === "Email") return {
                url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg",
                color: "#EA4335"
              };
              return null;
            };

            const icon = getIcon();

            return (
              <a
                key={index}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="relative group"
              >
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: icon.color + '15',
                    padding: '1.25rem'
                  }}
                >
                  <img 
                    src={icon.url} 
                    alt={social.label} 
                    className="w-full h-full object-contain"
                    style={{ 
                      filter: `brightness(0) saturate(100%)`,
                      WebkitMaskImage: `url(${icon.url})`,
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'contain',
                      backgroundColor: icon.color
                    }}
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
