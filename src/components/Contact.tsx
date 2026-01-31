import { useState } from "react";

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
    <section id="contact" className="py-24 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-primary-foreground/70">
            Have a question or want to work together? Drop me a message below.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary-foreground text-foreground font-medium rounded-lg hover:bg-primary-foreground/90 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Footer note */}
        <p className="mt-16 text-center text-sm text-primary-foreground/50">
          © 2024 Shishir Joshi. Designed with care.
        </p>
      </div>
    </section>
  );
};

export default Contact;
