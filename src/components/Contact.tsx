import { useState } from "react";
import contactIllustration from "@/assets/Gemini_Generated_Image_49ftr549ftr549ft.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_1.3fr] rounded-3xl overflow-hidden bg-white shadow-2xl">
          {/* Left visual panel */}
          <div className="relative text-white p-10 sm:p-12 flex flex-col justify-between min-h-[420px] bg-accent">
            <img
              src={contactIllustration}
              alt="Contact illustration"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            <div className="relative z-10">
              <p className="text-xs tracking-[0.4em] uppercase text-white/80">Best in</p>
              <h2 className="text-3xl sm:text-4xl font-semibold mt-3">UI/UX Design</h2>
              <p className="text-white/80 mt-3">Let's turn ideas into clean, high‑impact digital experiences.</p>
            </div>
            <div className="relative z-10">
              <p className="text-white/70 text-sm">Let's build something clean and impressive.</p>
            </div>
          </div>

          {/* Right form panel */}
          <div className="bg-accent/5 p-10 sm:p-12">
            <div className="mb-8">
              <p className="text-sm text-accent font-medium">Step 1 of 1</p>
              <div className="mt-2 h-1 w-full bg-accent/20 rounded-full overflow-hidden">
                <div className="h-full w-full bg-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mt-5">Contact Me</h3>
              <p className="text-muted-foreground mt-2">Share your project details and I'll respond quickly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-foreground font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-white border-2 border-accent/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(29,161,242,0.1)]"
                />
              </div>

              <div>
                <label className="text-sm text-foreground font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-white border-2 border-accent/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(29,161,242,0.1)]"
                />
              </div>

              <div>
                <label className="text-sm text-foreground font-medium">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-white border-2 border-accent/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(29,161,242,0.1)] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-accent shadow-md hover:shadow-lg transition-all duration-300"
              >
                Continue
              </button>
            </form>
          </div>
        </div>

        <p className="mt-20 text-center text-sm text-muted-foreground">
          Made by <a href="https://dhirendrasinghdhami.com.np/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Dhiren</a> at <a href="https://www.ctrlbits.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ctrl Bits</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
