import { memo, useCallback, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/projects";

export const Projects = memo(function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const move = useCallback((direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-project-card]");
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || pausedRef.current) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else move(1);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [move]);

  return (
    <section id="projects" className="py-24 md:py-32 relative surface-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-bold text-white">
              Projetos que <span className="text-accent">falam por si.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-white/85 text-base leading-relaxed">
              Uma seleção de obras, inspeções e projetos entregues com o padrão Beckmans de excelência.
            </p>
          </div>
        </div>


        <div
          ref={trackRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-5 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Projetos realizados"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              data-project-card
              className="group relative aspect-[4/5] w-[84%] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[48%] lg:w-[31.5%]"
            >
              <img
                src={project.image}
                alt={`${project.title} realizada pela Beckmans Engenharia`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: project.objectPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground sm:p-8">
                <span className="mb-4 inline-flex self-start rounded-full border border-accent/30 bg-primary/80 px-4 py-1.5 text-xs font-bold text-accent backdrop-blur-md">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-primary-foreground/80 sm:text-base">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 reveal">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Projeto anterior" className="btn-on-dark-outline rounded-full">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Próximo projeto" className="btn-on-dark-outline rounded-full">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
          <Button variant="accent" size="lg" asChild className="group rounded-full text-base px-10 h-14">
            <Link to="/portfolio">
              Ver portfólio completo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
});
