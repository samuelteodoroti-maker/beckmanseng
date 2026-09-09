import { memo } from "react";
import { ShieldCheck, Building2, Lightbulb, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site";

const icons = [Lightbulb, ShieldCheck, Building2];
const tags = ["Estratégia técnica", "Segurança", "Execução"];
const items = SERVICES.slice(0, 3).map((service, index) => ({ ...service, icon: icons[index], tag: tags[index] }));

export const Services = memo(function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 surface-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-14 reveal">
          <h2 className="text-h2 font-bold mb-4 text-primary dark:text-white">
             Soluções para cada <span className="text-accent">etapa do seu projeto.</span>
          </h2>
          <p className="text-lead text-muted-foreground">
             Atendimento técnico para planejar, construir, inspecionar e manter com mais segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.slice(0, 3).map((it, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl bg-card border border-border p-8 sm:p-10 hover-lift reveal transition-all duration-300 hover:border-accent shadow-soft flex flex-col justify-between min-h-[360px] will-change-transform"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex flex-col h-full gap-8">
                <div className="flex items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-all duration-300 bg-accent/12 text-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <it.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                </div>

                
                <div className="flex flex-col flex-grow">
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 font-bold text-accent/80">
                    {it.tag}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight text-primary dark:text-white">

                    {it.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                     {it.summary}
                  </p>
                </div>
              </div>
              
               <Link to={`/servicos/${it.slug}`} className="absolute inset-0 z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent" aria-label={`Conhecer ${it.title}`} />
              
              <ArrowUpRight className="absolute top-5 right-5 sm:top-6 sm:right-6 h-5 w-5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-accent z-10" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 reveal">
          <Button variant="accent" size="lg" asChild className="group rounded-full text-base px-10 h-14 shadow-glow">
            <Link to="/servicos">
              Ver todos os serviços
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
});
