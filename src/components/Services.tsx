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

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-60" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-14 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-index">03 —</span>
            <div className="section-chip">
              <HardHat className="h-4 w-4" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 min-h-[500px]">
          {items.map((it, idx) => (
            <article
              key={idx}
              className={`group relative overflow-hidden rounded-3xl glass card-ring p-6 sm:p-8 md:p-10 hover-lift reveal transition-all duration-500 hover:border-accent/40 aspect-[3/2] flex flex-col ${
                it.span ?? ""
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 bg-accent/15 text-accent">
                    <it.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span className="font-mono text-xs tracking-widest tabular-nums text-muted-foreground/60">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-2 text-muted-foreground">
                    {it.tag}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">{it.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
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
}
