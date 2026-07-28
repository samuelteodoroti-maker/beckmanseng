import { ArrowUpRight } from "lucide-react";

// 🔁 PLACEHOLDERS — Substitua as URLs `img` abaixo pelas fotos oficiais dos projetos.
// Fonte atual: Unsplash (temas: architecture / building / concrete)
const projects = [
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    title: "Edifício Corporativo",
    tag: "Construção",
    meta: "Estrutura metálica · 18 pav.",
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    title: "Inspeção Industrial",
    tag: "Inspeção",
    meta: "Galpão industrial · 8.000m²",
  },
  {
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    title: "Modelagem BIM",
    tag: "Projeto 3D",
    meta: "Uso misto · 12 pav.",
  },
  {
    img: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1200&q=80",
    title: "Fachada Comercial",
    tag: "Retrofit",
    meta: "Revitalização estrutural",
  },
  {
    img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1200&q=80",
    title: "Concreto Estrutural",
    tag: "Obra",
    meta: "Laje protendida · 2.400m²",
  },
  {
    img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80",
    title: "Vistoria de Cobertura",
    tag: "Vistoria",
    meta: "Inspeção técnica · laudo ART",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-index">03 —</span>
              <div className="section-chip">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Portfólio
              </div>
            </div>
            <h2 className="text-h2 font-bold">
              Projetos que <span className="text-accent">falam por si.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-muted-foreground text-base leading-relaxed">
              Uma seleção de obras, inspeções e projetos entregues com o padrão Beckmans de excelência.
            </p>
            <div className="font-mono text-xs tracking-widest text-muted-foreground/70 tabular-nums">
              06 PROJETOS · SELEÇÃO 2024/25
            </div>
          </div>
        </div>

        {/* Bento Grid — 6 placeholders (troque cada `img` acima pela foto oficial) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[240px] sm:auto-rows-[220px]">
          {projects.map((p, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-3xl reveal ${
                i === 0
                  ? "md:col-span-4 md:row-span-2"
                  : i === 3
                  ? "md:col-span-4"
                  : "md:col-span-2"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent transition-opacity duration-500 group-hover:from-primary/80" />
              <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end text-primary-foreground">
                <div className="flex items-center gap-2 mb-3">
                  <div className="glass inline-flex self-start rounded-full px-3 py-1 text-xs font-medium text-foreground">
                    {p.tag}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-primary-foreground/70 tabular-nums">
                    0{i + 1} / 06
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 leading-tight">{p.title}</h3>
                <p className="text-sm text-primary-foreground/80">{p.meta}</p>
              </div>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full glass flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="h-5 w-5 text-accent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
