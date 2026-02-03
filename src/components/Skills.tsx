const tools = [
  { 
    name: "Figma", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
    color: "#F24E1E",
    size: "large" 
  },
  { 
    name: "Notion", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/notion.svg",
    color: "#000000",
    size: "small" 
  },
  { 
    name: "Illustrator", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeillustrator.svg",
    color: "#FF9A00",
    size: "small" 
  },
  { 
    name: "Miro", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/miro.svg",
    color: "#FFD02F",
    size: "small" 
  },
  { 
    name: "Adobe XD", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobexd.svg",
    color: "#FF61F6",
    size: "small" 
  },
  { 
    name: "After Effects", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeaftereffects.svg",
    color: "#9999FF",
    size: "small" 
  },
  { 
    name: "Photoshop", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg",
    color: "#31A8FF",
    size: "small" 
  },
  { 
    name: "Slack", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg",
    color: "#4A154B",
    size: "small" 
  },
  { 
    name: "ChatGPT", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
    color: "#10A37F",
    size: "large" 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-foreground/40 uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground/70">
            Tools & Technologies
          </h2>
        </div>

        {/* Tools Grid - Clean Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 ${
                tool.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`${
                  tool.size === "large"
                    ? "w-32 h-32 md:w-40 md:h-40"
                    : "w-20 h-20 md:w-24 md:h-24"
                } group-hover:scale-110 transition-transform duration-300 mb-4 flex items-center justify-center`}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: `brightness(0) saturate(100%)`,
                    WebkitMaskImage: `url(${tool.icon})`,
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain',
                    backgroundColor: tool.color
                  }}
                />
              </div>
              <h3 className="text-sm md:text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
