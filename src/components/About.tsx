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
  "Fundada em 2024 no Rio de Janeiro, RJ",
  "Gestão de Andrew Matheus da Silva Beckman",
  "Engenheiro civil e gestor de projetos/obras",
  "Atuação no Grande Rio de Janeiro",
  "ART e responsabilidade técnica em todos os projetos",
  "Atendimento consultivo e personalizado",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
          <div className="space-y-6 sm:space-y-8 reveal">
            <div className="section-chip">
              Sobre a Beckmans
            </div>
            <h2 className="text-h2 font-bold">
              Empreendedorismo, engenharia e{" "}
              <span className="text-accent">segurança</span> em um só lugar.
            </h2>
            <p className="text-lead text-muted-foreground">
              A Beckmans Engenharia foi fundada em 4 de junho de 2024 no Rio de Janeiro, RJ, sob a gestão de
              Andrew Matheus da Silva Beckman, engenheiro civil e gestor de projetos/obras. Atuamos no Grande Rio
              com rigor técnico e compromisso por ambientes mais seguros.
            </p>
            {/* 🔁 PLACEHOLDER — Imagem de autoridade (troque ABOUT_IMAGE acima) */}
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] sm:aspect-[16/10]">
              <img
                src={ABOUT_IMAGE}
                alt="Engenheiro Beckmans em canteiro de obras"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 glass rounded-2xl px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium">
                Engenharia com assinatura técnica
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {checks.map((c, i) => (
                <div key={i} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:sticky lg:top-28">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="glass rounded-3xl p-5 sm:p-6 md:p-8 hover-lift reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shrink-0">
                    <p.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{p.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.text}</p>
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
