import { Search, ClipboardCheck, Building2, Lightbulb, ArrowUpRight, HardHat, FileCheck2, Ruler } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "Vistorias",
    desc: "Análise técnica completa de imóveis, obras e estruturas com laudos detalhados.",
    tag: "Precisão técnica",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    icon: ClipboardCheck,
    title: "Inspeções",
    desc: "Inspeções periódicas de segurança, prediais e industriais conforme NBR.",
    tag: "NBR 16.747",
  },
  {
    icon: Building2,
    title: "Construções & Reformas",
    desc: "Execução completa de obras residenciais, comerciais e industriais.",
    tag: "Obra pronta",
  },
  {
    icon: Lightbulb,
    title: "Consultoria em Engenharia",
    desc: "Consultoria estratégica em Engenharia Civil e Segurança do Trabalho.",
    tag: "Eng. Civil + SST",
    span: "md:col-span-2",
  },
  {
    icon: Ruler,
    title: "Projetos 2D e 3D",
    desc: "Modelagem, plantas e visualização com padrão BIM.",
    tag: "BIM",
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
          <div className="section-chip mb-6">
            <HardHat className="h-4 w-4" />
            Áreas de atuação
          </div>
          <h2 className="text-h2 font-bold mb-4">
            Quatro pilares. <span className="text-accent">Uma engenharia inteira.</span>
          </h2>
          <p className="text-lead text-muted-foreground">
            Da primeira vistoria à entrega da obra, cobrimos cada etapa com metodologia própria e tecnologia de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4 md:gap-6">
          {items.map((it, idx) => (
            <article
              key={idx}
              className={`group relative overflow-hidden rounded-3xl glass p-6 md:p-8 hover-lift reveal transition-colors hover:border-accent/40 ${
                it.span ?? ""
              } ${it.accent ? "bg-gradient-to-br from-primary to-primary/70 text-primary-foreground border-transparent" : ""}`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex flex-col h-full justify-between">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${it.accent ? "bg-accent text-accent-foreground" : "bg-accent/15 text-accent"}`}>
                  <it.icon className="h-7 w-7" />
                </div>
                <div>
                  <div className={`text-xs uppercase tracking-widest mb-2 ${it.accent ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                    {it.tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{it.title}</h3>
                  <p className={`text-sm md:text-base ${it.accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {it.desc}
                  </p>
                </div>
              </div>
              <ArrowUpRight className={`absolute top-6 right-6 h-5 w-5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all ${it.accent ? "text-accent" : "text-accent"}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
