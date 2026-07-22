import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { img: p1, title: "Edifício Corporativo", tag: "Construção", meta: "Estrutura metálica · 18 pav." },
  { img: p2, title: "Inspeção Industrial", tag: "Inspeção", meta: "Galpão industrial · 8.000m²" },
  { img: p3, title: "Modelagem BIM", tag: "Projeto 3D", meta: "Uso misto · 12 pav." },
  { img: p4, title: "Fachada Comercial", tag: "Retrofit", meta: "Revitalização estrutural" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium">Portfólio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Projetos que <span className="text-accent">falam por si.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Uma seleção de obras, inspeções e projetos entregues com o padrão Beckmans de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-auto ${
                i === 0 ? "md:col-span-4 md:row-span-2 md:aspect-[16/10]" : "md:col-span-2 md:aspect-[4/3]"
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-primary-foreground">
                <div className="glass inline-flex self-start rounded-full px-3 py-1 mb-3 text-xs font-medium text-foreground">
                  {p.tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-primary-foreground/80">{p.meta}</p>
              </div>
              <div className="absolute top-6 right-6 w-11 h-11 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-accent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
