import { Mail, Linkedin, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@yourname.com",
    label: "hello@yourname.com"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourprofile",
    label: "linkedin.com/in/yourprofile"
  },
  {
    name: "Behance",
    icon: ExternalLink,
    href: "https://behance.net/yourprofile",
    label: "behance.net/yourprofile"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm font-medium tracking-widest opacity-60 uppercase mb-4">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let's Work Together
        </h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-12">
          I'm always open to discussing new projects, creative ideas, 
          or opportunities to be part of your vision.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors group"
            >
              <link.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-16 text-sm text-primary-foreground/50">
          © 2024 Your Name. Designed with care.
        </p>
      </div>
    </section>
  );
};

export default Contact;
