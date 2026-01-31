import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const About = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:shishirjoshi65@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shishir-joshi-5948aa276/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/shishir-joshi", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/shishirjoshi65", label: "Twitter" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* About title */}
        <div>
          <p className="text-sm font-medium tracking-widest text-foreground uppercase mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Creative Designer & Researcher
          </h2>
        </div>

        {/* Short bio */}
        <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a creative and detail-oriented Graphic Designer passionate about transforming ideas into visually impactful designs. I specialize in branding, social media graphics, posters, and digital illustrations.
          </p>
          <p>
            With a strong background in research and design, I combine analytical thinking with creative problem-solving. Currently working as an Independent Researcher and Graphic Designer.
          </p>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 hover:text-[#1DA1F2] transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
