import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Partners />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <FloatingCTA />
      </div>
    </ThemeProvider>
  );
};

export default Index;
