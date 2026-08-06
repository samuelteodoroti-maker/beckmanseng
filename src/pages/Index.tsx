import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { useReveal } from "@/hooks/use-reveal";
import SectionLoading from "@/components/SectionLoading";

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
        <Helmet>
          <title>Beckmans Engenharia | Excelência em Projetos e Construções no Rio de Janeiro</title>
          <meta 
            name="description" 
            content="A Beckmans Engenharia oferece soluções completas em engenharia civil: vistorias com drone, projetos 2D/3D BIM, reformas, construções e consultoria técnica especializada." 
          />
          <meta property="og:title" content="Beckmans Engenharia | Engenharia Civil e Consultoria Técnica" />
          <meta property="og:description" content="Projetos e construções com excelência técnica. Vistorias prediais, segurança do trabalho e gerenciamento de obras." />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Beckmans Engenharia",
                "image": "https://beckmans-engenharia.lovable.app/favicon.png",
                "@id": "https://beckmans-engenharia.lovable.app",
                "url": "https://beckmans-engenharia.lovable.app",
                "telephone": "+55-21-98223-4712",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Rio de Janeiro",
                  "addressRegion": "RJ",
                  "addressCountry": "BR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -22.9068,
                  "longitude": -43.1729
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                "sameAs": [
                  "https://www.instagram.com/beckmans.engenharia/"
                ]
              }
            `}
          </script>
        </Helmet>
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
