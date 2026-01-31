import { useState } from "react";
import { toast } from "sonner";
import contactIllustration from "@/assets/Gemini_Generated_Image_49ftr549ftr549ft.png";
import { useFormValidation } from "@/hooks/use-form-validation";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  } = useFormValidation({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! I'll get back to you soon.", {
        description: `Thanks for reaching out, ${formData.name}!`,
      });
      
      resetForm();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              loading="lazy"
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
          <div className="bg-background p-10 sm:p-12">
            <div className="mb-8">
              <p className="text-sm text-accent font-medium">Step 1 of 1</p>
              <div className="mt-2 h-1 w-full bg-accent/20 rounded-full overflow-hidden">
                <div className="h-full w-full bg-accent" />
              </div>
              <h3 className="text-3xl font-semibold text-foreground mt-5">Contact Me</h3>
              <p className="text-muted-foreground mt-2">Share your project details and I'll respond quickly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-base text-foreground font-semibold block mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  aria-label="Full Name"
                  className={`w-full px-0 py-2 rounded-none bg-transparent border-b text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors disabled:opacity-50 ${
                    errors.name && touched.name
                      ? "border-red-500 focus:border-red-500" 
                      : "border-foreground/20 focus:border-accent"
                  }`}
                />
                {errors.name && touched.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
              </div>

              <div>
                <label className="text-base text-foreground font-semibold block mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  aria-label="Email"
                  className={`w-full px-0 py-2 rounded-none bg-transparent border-b text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors disabled:opacity-50 ${
                    errors.email && touched.email
                      ? "border-red-500 focus:border-red-500" 
                      : "border-foreground/20 focus:border-accent"
                  }`}
                />
                {errors.email && touched.email && <p className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
              </div>

              <div>
                <label className="text-base text-foreground font-semibold block mb-3">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  aria-label="Message"
                  className={`w-full px-0 py-2 rounded-none bg-transparent border-b text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors resize-none disabled:opacity-50 ${
                    errors.message && touched.message
                      ? "border-red-500 focus:border-red-500" 
                      : "border-foreground/20 focus:border-accent"
                  }`}
                />
                {errors.message && touched.message && <p className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-accent shadow-md hover:shadow-lg transition-all duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Continue"}
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
