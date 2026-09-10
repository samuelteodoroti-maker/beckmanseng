import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageBanner } from "@/components/PageBanner";
import { whatsappUrl } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Portfólio de Engenharia no RJ | Beckmans" description="Conheça registros de obras, vistorias, inspeções e serviços técnicos realizados pela Beckmans Engenharia." path="/portfolio" />

      <Navbar />

       <main id="main-content" className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6 mb-16">
            <div className="section-chip inline-flex">Portfólio</div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Projetos que <span className="text-accent">falam por si.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
               Registros de campo que apresentam áreas de atuação e soluções executadas pela equipe Beckmans.
            </p>
          </div>

          <PageBanner
            image="/images/projetos/projeto-08.jpg"
            alt="Registro de obra e inspeção técnica realizada pela Beckmans Engenharia"
            objectPosition="center 40%"
            eyebrow="Registros reais"
            caption="Dez registros de campo em vistorias, coberturas, estruturas e manutenção."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <button
                type="button"
                key={project.id}
                onClick={() => setSelectedIndex(index)}
                aria-label={`Ampliar ${project.title}`}
                className="group relative h-[340px] overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <img
                  src={project.image}
                  alt={`${project.title} realizada pela Beckmans Engenharia`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: project.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
                  <div className="glass-dark backdrop-blur-md inline-flex self-start rounded-full px-4 py-1.5 text-xs font-bold text-accent border-accent/20 mb-4">
                    {project.category}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 leading-tight">{project.title}</h2>
                  <p className="text-sm text-primary-foreground/75">{project.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center space-y-8 pt-20">
            <h2 className="text-3xl font-bold">Quer um projeto assim para a sua obra?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild className="group rounded-full text-base px-10 h-16">
                <a
                  href={whatsappUrl("Olá Beckmans! Vi o portfólio e gostaria de solicitar um orçamento para meu projeto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full text-base px-10 h-16">
                <Link to="/servicos">Ver os serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
        {selectedIndex !== null && (
          <DialogContent className="max-h-[94dvh] w-[calc(100%-1.5rem)] max-w-6xl border-border bg-primary p-3 sm:p-5">
            <DialogTitle className="pr-10 text-primary-foreground">{PROJECTS[selectedIndex].title}</DialogTitle>
            <DialogDescription className="text-primary-foreground/75">{PROJECTS[selectedIndex].description}</DialogDescription>
            <div className="relative flex min-h-0 items-center justify-center overflow-hidden rounded-xl bg-primary">
              <img
                src={PROJECTS[selectedIndex].image}
                alt={`${PROJECTS[selectedIndex].title} realizada pela Beckmans Engenharia`}
                className="max-h-[70dvh] w-full object-contain"
              />
              <Button variant="accent" size="icon" onClick={() => setSelectedIndex((selectedIndex - 1 + PROJECTS.length) % PROJECTS.length)} aria-label="Foto anterior" className="absolute left-3 rounded-full">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button variant="accent" size="icon" onClick={() => setSelectedIndex((selectedIndex + 1) % PROJECTS.length)} aria-label="Próxima foto" className="absolute right-3 rounded-full">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-primary-foreground" aria-live="polite">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {selectedIndex + 1} de {PROJECTS.length}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default memo(Portfolio);
