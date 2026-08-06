import { memo } from "react";
import { Search, ShieldCheck, Building2, Lightbulb, ArrowUpRight, HardHat, FileCheck2, Ruler } from "lucide-react";

interface ServiceItem {
  icon: any;
  title: string;
  desc: string;
  tag: string;
  span?: string;
}

const items: ServiceItem[] = [
  {
    icon: Lightbulb,
    title: "Consultoria em Engenharia",
    desc: "Consultoria estratégica em engenharia civil para viabilizar e otimizar seu projeto.",
    tag: "Estratégia técnica",
  },
  {
    icon: ShieldCheck,
    title: "Consultoria em Segurança do Trabalho",
    desc: "Programas, laudos e assessoria em SST conforme as Normas Regulamentadoras.",
    tag: "NRs & SST",
  },
  {
    icon: Building2,
    title: "Reforma e Construções",
    desc: "Execução completa de obras residenciais, comerciais e industriais.",
    tag: "Obra pronta",
  },
  {
    icon: Ruler,
    title: "Projetos 2D e 3D",
    desc: "Modelagem, plantas e visualização com padrão BIM.",
    tag: "BIM",
  },
  {
    icon: Search,
    title: "Vistorias",
    desc: "Análise técnica completa de imóveis, obras e estruturas.",
    tag: "Precisão técnica",
  },
  {
    icon: FileCheck2,
    title: "Laudos Técnicos",
    desc: "Documentação técnica assinada por responsável habilitado.",
    tag: "ART inclusa",
  },
];

export const Services = memo(function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-60" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-14 reveal">
          <div className="flex flex-col items-start gap-4 mb-8">
            <span className="section-index">03</span>
            <div className="section-chip !px-10 py-4 bg-accent/10 backdrop-blur-sm rounded-full border shadow-lg shadow-accent/5 tracking-[0.3em]">
              <HardHat className="h-5 w-5 mr-2" />
              Áreas de atuação
            </div>
          </div>
          <h2 className="text-h2 font-bold mb-4">
            Seis frentes. <span className="text-accent">Uma engenharia inteira.</span>
          </h2>
          <p className="text-lead text-muted-foreground">
            Da primeira vistoria à entrega da obra, cobrimos cada etapa com metodologia própria e tecnologia de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, idx) => (
            <article
              key={idx}
              className={`group relative overflow-hidden rounded-3xl glass card-ring p-8 sm:p-10 hover-lift reveal transition-all duration-500 hover:border-accent/40 hover:shadow-glow/10 flex flex-col justify-between min-h-[360px] ${
                it.span ?? ""
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex flex-col h-full gap-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[1.25rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white shadow-sm">
                    <it.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span className="font-mono text-xs tracking-widest tabular-nums text-muted-foreground/60">
                    0{idx + 1}
                  </span>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 font-bold text-accent/80">
                    {it.tag}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight text-foreground">
                    {it.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </div>
              
              <ArrowUpRight className="absolute top-5 right-5 sm:top-6 sm:right-6 h-5 w-5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-accent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});
