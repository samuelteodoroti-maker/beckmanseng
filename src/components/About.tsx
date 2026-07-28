import { CheckCircle2, Target, Eye, Shield } from "lucide-react";

// 🔁 PLACEHOLDER — Substitua pela foto oficial do engenheiro / canteiro de obras.
// Fonte atual: Unsplash (tema: engineer on site)
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80";

const pillars = [
  { icon: Target, title: "Missão", text: "Transformar ideias em projetos de engenharia com excelência técnica." },
  { icon: Eye, title: "Visão", text: "Ser referência em inovação e qualidade em engenharia civil e segurança." },
  { icon: Shield, title: "Valores", text: "Ética, segurança, inovação e compromisso com prazo e resultado." },
];

const checks = [
  "Atuação desde 2009 no mercado industrial",
  "Equipe multidisciplinar com engenheiros habilitados",
  "Foco em ambientes industriais mais seguros",
  "Metodologia própria com tecnologia BIM",
  "ART e responsabilidade técnica em todos os projetos",
  "Atendimento consultivo e personalizado",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8 reveal">
            <div className="section-chip">
              Sobre a Beckmans
            </div>
            {/* 🔁 PLACEHOLDER — Imagem de autoridade (troque ABOUT_IMAGE acima) */}
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[16/10]">
              <img
                src={ABOUT_IMAGE}
                alt="Engenheiro Beckmans em canteiro de obras"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-4 left-4 glass rounded-2xl px-4 py-2 text-sm font-medium">
                Engenharia com assinatura técnica
              </div>
            </div>
            <h2 className="text-h2 font-bold">
              Empreendedorismo, engenharia e{" "}
              <span className="text-accent">segurança</span> em um só lugar.
            </h2>
            <p className="text-lead text-muted-foreground">
              Somos liderados por engenheiro civil e de segurança do trabalho, com atuação no setor industrial
              desde 2009. Cada projeto é conduzido com rigor técnico e uma obsessão por ambientes mais seguros.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {checks.map((c, i) => (
                <div key={i} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="glass rounded-3xl p-6 md:p-8 hover-lift reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shrink-0">
                    <p.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
