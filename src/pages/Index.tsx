import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  // SEO Hook
  useSeo({
    title: "Shishir Joshi - Graphic Designer & Researcher | Portfolio",
    description: "Shishir Joshi - Award-winning Graphic Designer, UI/UX Designer, and Researcher. Explore innovative design projects, branding solutions, and research-driven design work.",
    keywords: "Shishir Joshi, Graphic Designer, UI/UX Designer, Researcher, Portfolio, Design, Branding, Visual Design",
    ogType: "website",
    canonicalUrl: "https://shishirjoshi.com",
    ogImage: "https://shishirjoshi.com/og-image.png"
  });
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <About />
      <Work />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
