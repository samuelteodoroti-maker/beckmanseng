import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import droneHighAsset from "@/assets/drone_vistoria.jpeg.asset.json";
import drillAsset from "@/assets/project_drill.jpg.asset.json";
import torqueAsset from "@/assets/project_torque.jpg.asset.json";
import cleaningAsset from "@/assets/project_cleaning.jpg.asset.json";
import structureAsset from "@/assets/project_structure.jpg.asset.json";
import aboutAuthorityAsset from "@/assets/about_authority.jpg.asset.json";

const projects = [
  {
    img: droneHighAsset.url,
    title: "Vistoria com Drone",
    tag: "Vistoria",
    meta: "Inspeção técnica de alta precisão",
  },
  {
    img: drillAsset.url,
    title: "Manutenção Industrial",
    tag: "Obra",
    meta: "Execução com ferramentas de ponta",
  },
  {
    img: torqueAsset.url,
    title: "Segurança em Altura",
    tag: "Segurança",
    meta: "Consultoria em SST e NR-35",
  },
  {
    img: cleaningAsset.url,
    title: "Limpeza Técnica",
    tag: "Manutenção",
    meta: "Serviços especializados em altura",
  },
  {
    img: structureAsset.url,
    title: "Inspeção de Estrutura",
    tag: "Inspeção",
    meta: "Análise de integridade estrutural",
  },
  {
    img: aboutAuthorityAsset.url,
    title: "Controle de Voo",
    tag: "Tecnologia",
    meta: "Mapeamento e monitoramento aéreo",
  },
];

export const Projects = memo(function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div className="max-w-2xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[240px]">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl reveal will-change-transform ${
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
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent transition-all duration-700 group-hover:from-primary/90 group-hover:via-primary/20" />
              <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <div className="glass-dark backdrop-blur-md inline-flex self-start rounded-full px-4 py-1.5 text-xs font-bold text-accent border-accent/20">
                    {p.tag}
                  </div>
                  <span className="font-mono text-[11px] tracking-widest text-primary-foreground/60 tabular-nums">
                    0{i + 1} / 06
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight tracking-tight">{p.title}</h3>
                <p className="text-sm md:text-base text-primary-foreground/70 line-clamp-2 max-w-sm">{p.meta}</p>
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
});
