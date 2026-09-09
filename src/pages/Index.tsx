import { Suspense, lazy } from "react";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { useReveal } from "@/hooks/use-reveal";
import { StructuredData } from "@/components/StructuredData";
import SectionLoading from "@/components/SectionLoading";
import { Seo } from "@/components/Seo";

// Lazy load non-critical sections
const Partners = lazy(() => import("@/components/Partners").then(m => ({ default: m.Partners })));
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const Projects = lazy(() => import("@/components/Projects").then(m => ({ default: m.Projects })));
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

const Index = () => {
  useReveal();
  
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen flex flex-col">
        <Seo
          title="Engenharia Civil no Rio de Janeiro | Beckmans"
          description="Projetos, obras, vistorias, inspeções e consultoria em engenharia civil no Rio de Janeiro. Solicite seu orçamento à Beckmans Engenharia."
        />
        <StructuredData />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          
          <Suspense fallback={<SectionLoading />}>
            <Partners />
          </Suspense>
          
          <Suspense fallback={<SectionLoading />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<SectionLoading />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<SectionLoading />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<SectionLoading />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </ThemeProvider>
  );
};

export default Index;
