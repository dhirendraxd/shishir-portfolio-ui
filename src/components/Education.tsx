import { SOCIAL_LINKS } from "../lib/constants";
import linkedinIcon from "@/assets/socials/linkedin (1).png";
import githubIcon from "@/assets/socials/github.png";
import twitterIcon from "@/assets/socials/twitter (1).png";
import instagramIcon from "@/assets/socials/instagram.png";

const Education = () => {
  const getSocialIcon = (label: string) => {
    const iconMap: Record<string, string> = {
      "LinkedIn": linkedinIcon,
      "GitHub": githubIcon,
      "Twitter": twitterIcon,
      "Instagram": instagramIcon,
    };
    return iconMap[label] || githubIcon;
  };

  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-foreground/60 uppercase mb-3">
            Connect
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Social
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {SOCIAL_LINKS.map((social, index) => {
            const iconSrc = getSocialIcon(social.label);

            return (
              <a
                key={index}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="relative group flex flex-col items-center"
              >
                <img 
                  src={iconSrc}
                  alt={social.label} 
                  loading="lazy"
                  className="w-14 h-14 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-125"
                />
                <span className="text-xs font-medium text-foreground/70 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
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
