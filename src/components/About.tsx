import { Mail, Linkedin, Github, Twitter, CheckCircle2, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  const socialLinks = [
    { icon: Mail, href: "mailto:shishirjoshi65@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shishir-joshi-5948aa276/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/shishir-joshi", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/shishirjoshi65", label: "Twitter" },
  ];

  const latestRoles = [
    {
      company: "Independent",
      role: "Graphic Designer & Researcher",
      logo: "🎨",
      bgColor: "bg-accent"
    },
    {
      company: "Freelance",
      role: "UI/UX Designer",
      logo: "✨",
      bgColor: "bg-foreground"
    }
  ];

  const mainApps = [
    { name: "Figma", icon: "🎨" },
    { name: "Photoshop", icon: "🖼️" },
    { name: "Illustrator", icon: "✏️" },
    { name: "Canva", icon: "📐" }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          
          {/* Left Column - Profile Card */}
          <div className="bg-white rounded-3xl p-10 shadow-md flex flex-col items-center text-center space-y-6">
            {/* Profile Photo */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-full transform scale-110" />
              <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center overflow-hidden">
                <div className="text-7xl font-bold text-foreground/15">SJ</div>
              </div>
            </div>

            {/* Name & Email */}
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-foreground">Shishir Joshi</h2>
              <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">
                Visual Designer
              </p>
              <p className="text-muted-foreground text-sm pt-1">
                shishirjoshi65@gmail.com
              </p>
            </div>

            {/* View Resume Button */}
            <button 
              onClick={() => navigate('/resume')}
              className="mt-2 bg-[#6B8E23] text-white px-10 py-3.5 rounded-full font-medium hover:bg-accent hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4" />
              View Resume
            </button>

            {/* Divider */}
            <div className="w-full h-px bg-foreground/10 mt-12 mb-6" />

            {/* Social Icons */}
            <div className="flex justify-center gap-5">
              <a
                href="mailto:shishirjoshi65@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shishir-joshi-5948aa276/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/shishir-joshi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#181717] hover:bg-black text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/shishirjoshi65"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - About & Details */}
          <div className="space-y-6">
            
            {/* About Me Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold text-foreground">About Me</h3>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-green-600 font-medium">Open to work</span>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Visual Designer passionate about creating user-friendly interfaces that are functional and visually compelling. I specialize in branding, social media graphics, posters, and digital illustrations.
                </p>
                <p>
                  Born and raised in the beautiful Kathmandu, Nepal. When I'm not busy designing, you'll likely find me exploring new design trends, playing video games, or enjoying local cuisine.
                </p>
              </div>
            </div>

            {/* Latest Roles & Main Apps Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg space-y-8">
              
              {/* Latest Roles */}
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Latest Roles</h4>
                <div className="space-y-4">
                  {latestRoles.map((role, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${role.bgColor} rounded-xl flex items-center justify-center text-2xl text-white shadow-md`}>
                        {role.logo}
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">{role.role}</h5>
                        <p className="text-sm text-muted-foreground">{role.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Apps */}
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Main Apps</h4>
                <div className="grid grid-cols-4 gap-4">
                  {mainApps.map((app, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center text-2xl hover:bg-accent/10 transition-colors cursor-pointer shadow-sm">
                        {app.icon}
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
